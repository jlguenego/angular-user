import { forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export abstract class AbstractValueAccessor implements ControlValueAccessor {
  private privateValue: any = '';
  get value(): any { return this.privateValue; }
  set value(v: any) {
    if (v !== this.privateValue) {
      this.privateValue = v;
      this.onChange(v);
    }
  }

  writeValue(value: any) {
    this.privateValue = value;
    // warning: comment below if only want to emit on user intervention
    this.onChange(value);
  }

  onChange = (_) => { };
  onTouched = () => { };
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}

export function MakeProvider(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
