import { TestBed } from '@angular/core/testing';

// @ts-ignore
import { AuthGuard } from 'src/app/shared/components/auth/auth.gard';

describe('AuthGuard', () => {
    let guard: AuthGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        guard = TestBed.inject(AuthGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
