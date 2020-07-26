// Para contorladores
import { AbstractControl, ValidatorFn } from '@angular/forms';

// Para manejo de las fechas
import * as moment from 'moment';

declare var M: any // Variable de materialize

// === CLASE CON LAS VALIDACIONES === //
export class misValidaciones {

   // Validacion de fecha en formato DD/MM/YYYY
   static dateValidator(fecha: AbstractControl) {
      if (fecha.pristine) {
         return null;
      }
      if (moment(fecha.value, 'DD/MM/YYYY', true).isValid()) {
         return null;
      } else {
         // console.warn('fecha no valida')
         return {
            invalidDate: true
         }
      };
   };

   // Validacion de no fechas en el futuro
   static noFutureDateValidator(fecha: AbstractControl) {
      if (fecha.pristine || (!moment(fecha.value, 'DD/MM/YYYY', true).isValid())) {
         return null;
      }
      var a = moment(fecha.value, "DD/MM/YYYY")
      var dToday = moment();
      if (dToday.diff(a) > 0) {
         return null
      } else {
         console.warn('la fecha es mayor a hoy');
         M.toast({ html: 'La fecha es mayor al día de hoy' })
         return {
            invalidDate: true
         }
      };
   };


   // Validacion de campos usando expresiones regulares
   static regexValidator(expresionReg: RegExp): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
         if (control.pristine) {
            return null
         }
         const pValidacion = expresionReg.test(control.value);
         if (pValidacion && (isNaN(control.value))) {
            console.log('correcto');
            return null
         } else {
            console.warn('fallo fallo fallo')
            return {
               invalidControl: true
            }
         }
      }
   };
}
