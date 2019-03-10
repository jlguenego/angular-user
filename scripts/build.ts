import * as child from 'child_process';
import * as path from 'path';
import * as fs from 'fs-extra';

const spawn = child.spawn;

if (process.argv.length < 3) {
    throw `
Error: Missing arguments.

Usage: build.ts <firebaseCommand> [environment=default]

firebaseCommand = serve or deploy
environment = default, production, preprod, staging, etc.`
}

const firebaseCommand = process.argv[2] || 'serve';
const env = process.argv[3] || 'default';

console.log('firebaseCommand', firebaseCommand);
console.log('environment', env);
const projectDir = path.resolve(__dirname, '..');
const projectName = path.basename(projectDir);
console.log('projectName', projectName);
// Deployment

// Build Universal app
function runCommand(name, args) {
    return new Promise((resolve, reject) => {
        const prog = spawn(name, args, {
            cwd: projectDir,
            stdio: 'inherit',
            shell: true,
        });
        prog.on('error', reject);
        prog.on('close', code => (+code > 0) ? reject() : resolve());
    });
}

function adjustFile() {
    const dist = path.resolve(projectDir, './dist');
    const ssrDir = path.resolve(projectDir, './dist/ssr');
    
    try {
        fs.mkdirpSync(dist);
        fs.emptyDirSync(ssrDir);
        fs.copySync(path.resolve(projectDir, './functions/dist/browser'), ssrDir);
        fs.renameSync(path.resolve(projectDir, './dist/ssr/index.html'), path.resolve(projectDir, './dist/ssr/not-found.html'));
        fs.copyFileSync(path.resolve(projectDir, `./environments/firebase-admin.${env}.json`), path.resolve(projectDir, './functions/secret.json'));
        console.info('success!');
    } catch (err) {
        console.error(err);
    }
}

async function main() {
    try {
        await runCommand('ng', ['run', `${projectName}:ssr-client`, '--configuration=production']);
        await runCommand('ng', ['run', `${projectName}:ssr-server`, '--configuration=production']);
        adjustFile();
        await runCommand('firebase', [firebaseCommand]);
    } catch (error) {
        console.log('error', error);
    }
}
main();
