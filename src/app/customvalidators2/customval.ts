
//import { createHostListener } from '@angular/compiler/src/core';
import{FormControl} from "@angular/forms"
export class Customval {
    public static strongPwd(ctrl:FormControl){
        if(ctrl.value.indexOf(".")==-1 ){
            return null;
        }else{
            return{
                strongpwd:{
                    valid:false
                }
            };
        }
        
    }
    
    // public  checkPwd(ctrl1:FormControl){
    //     if(ctrl1.value=="abcdef" ){
    //         return null;
    //     }else{
    //         return{
    //             checkpwd:{
    //                 valid:false
    //             }
    //         };
    //     }
    // }
}