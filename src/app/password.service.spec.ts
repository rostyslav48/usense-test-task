import { TestBed } from '@angular/core/testing';

import { PasswordService } from './password.service';
import { PasswordStrength } from '../shared/enums/password-strength.enum';

describe('PasswordService', () => {
  let service: PasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be default', () => {
    const TESTED_PASSWORD = '';
    const EXPECTED_VALUE = PasswordStrength.Default;
    const result = service.checkPasswordStrength(TESTED_PASSWORD);

    expect(result).toBe(EXPECTED_VALUE);
  });

  it('Should be short', () => {
    const TESTED_PASSWORD = 'qwe1@';
    const EXPECTED_VALUE = PasswordStrength.Short;
    const result = service.checkPasswordStrength(TESTED_PASSWORD);

    expect(result).toBe(EXPECTED_VALUE);
  });

  it('Should be weak', () => {
    const TESTED_PASSWORD = '12345678';
    const EXPECTED_VALUE = PasswordStrength.Weak;
    const result = service.checkPasswordStrength(TESTED_PASSWORD);

    expect(result).toBe(EXPECTED_VALUE);
  });

  it('Should be medium', () => {
    const TESTED_PASSWORD = '12345678av';
    const EXPECTED_VALUE = PasswordStrength.Medium;
    const result = service.checkPasswordStrength(TESTED_PASSWORD);

    expect(result).toBe(EXPECTED_VALUE);
  });

  it('Should be strong', () => {
    const TESTED_PASSWORD = '12345678qw#4!';
    const EXPECTED_VALUE = PasswordStrength.Strong;
    const result = service.checkPasswordStrength(TESTED_PASSWORD);

    expect(result).toBe(EXPECTED_VALUE);
  });
});
