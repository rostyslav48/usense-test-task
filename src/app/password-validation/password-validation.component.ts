import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordService } from '../password.service';
import { PasswordStrength } from '../../shared/enums/password-strength.enum';

@Component({
  selector: 'app-password-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-validation.component.html',
  styleUrl: './password-validation.component.scss',
})
export class PasswordValidationComponent {
  passwordService = inject(PasswordService);
  passwordStrength: PasswordStrength = PasswordStrength.Default;

  checkPassword(password: string) {
    this.passwordStrength =
      this.passwordService.checkPasswordStrength(password);
  }
}
