import { Injectable } from '@angular/core';
import { PasswordStrength } from '../shared/enums/password-strength.enum';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  checkPasswordStrength(password: string): PasswordStrength {
    if (1 <= password.length && password.length < 8) {
      return PasswordStrength.Short;
    }

    const lettersPattern = /[a-zA-Z]/g;
    const numbersPattern = /\d/g;
    const symbolsPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

    const isLettersPresent = lettersPattern.test(password);
    const isDigitsPresent = numbersPattern.test(password);
    const isSymbolsPresent = symbolsPattern.test(password);

    if (isLettersPresent && isDigitsPresent && isSymbolsPresent) {
      return PasswordStrength.Strong;
    }

    if (
      (isLettersPresent && isDigitsPresent) ||
      (isDigitsPresent && isSymbolsPresent) ||
      (isSymbolsPresent && isLettersPresent)
    ) {
      return PasswordStrength.Medium;
    }

    if (
      lettersPattern.test(password) ||
      numbersPattern.test(password) ||
      symbolsPattern.test(password)
    ) {
      return PasswordStrength.Weak;
    }

    return PasswordStrength.Default;
  }
}
