import{FormControl} from"@angular/forms"
export class Customv {
    public static noSpecialChars(ctrl:FormControl){
        if(ctrl.value.indexOf(".")==-1 && ctrl.value.indexOf(" ")==-1){
            return null;
        }else{
            return{
                nospecialchars:{
                    valid:false
                }
            };
        }
    }
}
// public static noSpecialChars(ctrl: FormControl) {
//     if (ctrl.value.indexOf(".") == -1 && 
//     ctrl.value.indexOf(" ") == -1) {
//         return null;
//     } else {
//         return {
//             nospecialchars: {
//                 valid: false
//             }
//         };
//     }
// }
