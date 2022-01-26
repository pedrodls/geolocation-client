import { Validators } from '@angular/forms';

export class UserForm {

  constructor() {
    return {
      name: ['',
        [
          Validators.required,
        ]
      ],
      country: ['',
        [
          Validators.required,
        ]
      ],
      province: ['',
        [
          Validators.required,
        ]
      ],
      latitude: ['',
        [
          Validators.required,
        ]
      ],
      longitude: ['',
        [
          Validators.required,
        ]
      ]
    };
  }
}
