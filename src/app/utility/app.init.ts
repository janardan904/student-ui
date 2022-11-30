
import { KeycloakService } from 'keycloak-angular';
//import { environment } from 'src/environments/environment';
 export function initializer(keycloak: KeycloakService): () => Promise<any> {
   return () =>  
         keycloak.init({
               config: {
                url:'http://localhost:8080/auth',
                realm:'studentreg',
                clientId:'registration',
                },
                initOptions: {
                  // must match to the configured value in keycloak
                 redirectUri:'http://localhost:4200/' ,
                  onLoad:'login-required',
                  checkLoginIframe:true,
                  checkLoginIframeInterval:10,  
                  // this will solved the error 
                }
            })
      }