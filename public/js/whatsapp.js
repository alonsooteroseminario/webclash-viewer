import { send_whatsApp } from '../../wp-sendMessage';

class wp extends Autodesk.Viewing.Extension {

	constructor(viewer, options) {
        super(viewer, options);
        this._group = null;
        this._button = null;
    }
	load() {
        console.log('Whatsapp Extension');
        return true;
    }

    // unload() {
    //     // Clean our UI elements if we added any
    //     if (this._group) {
    //         this._group.removeControl(this._button);
    //         if (this._group.getNumberOfControls() === 0) {
    //             this.viewer.toolbar.removeControl(this._group);
    //         }
    //     }
    //     console.log('MyAwesomeExtensions has been unloaded');
	// 	return true;
		
	// }
	onToolbarCreated() {
        // Create a new toolbar group if it doesn't exist
        this._group = this.viewer.toolbar.getControl('Whatsapp Extension');
        if (!this._group) {
            this._group = new Autodesk.Viewing.UI.ControlGroup('Whatsapp Extension');
            this.viewer.toolbar.addControl(this._group);
        }

        // Add a new button to the toolbar group
        this._button = new Autodesk.Viewing.UI.Button('Whatsapp Extension');
        this._button.onClick = (ev) => {
			// Execute an action here
            send_whatsApp();

        };
        this._button.setToolTip('Send WhatsApp');
        this._button.addClass('myAwesomeExtensionIcon');
		this._group.addControl(this._button);
		

    }	
}	
	
Autodesk.Viewing.theExtensionManager.registerExtension('wp', wp);
