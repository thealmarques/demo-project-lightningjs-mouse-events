import { Lightning } from "wpe-lightning-sdk";
import { EventUtils } from "./lib/EventUtils.js";
import Menu from "./menu/Menu.js";

export default class Main extends Lightning.Component {

    static _template(){
        return {
            Menu:{
                x: 600, y:400,
                type: Menu, items:[
                    {label:'START NEW GAME',action:'start'},
                    {label:'CONTINUE',action:'continue'},
                    {label:'ABOUT',action:'about'},
                    {label:'EXIT', action:'exit'}
                ]
            }
        }
    }

    _getFocused(){
        return this.tag("Menu");
    }

    _handleEnter(){
        this.signal("select", {item: this.tag("Menu").activeItem});
    }

    _active() {
        EventUtils.listen(this.tag("Menu"), 'click', (element, _) => {
            console.log('Clicked in Main.js')
            this.signal("select", {item: element});
        });
    }
}