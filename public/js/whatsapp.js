class wp extends Autodesk.Viewing.Extension {

	constructor(viewer, options) {
        super(viewer, options);
        this._group = null;
        this._button = null;
    }
	load() {
        console.log('MyAwesomeExtensions has been loaded');
        return true;
    }

    unload() {
        // Clean our UI elements if we added any
        if (this._group) {
            this._group.removeControl(this._button);
            if (this._group.getNumberOfControls() === 0) {
                this.viewer.toolbar.removeControl(this._group);
            }
        }
        console.log('MyAwesomeExtensions has been unloaded');
		return true;
		
	}
	onToolbarCreated() {
        // Create a new toolbar group if it doesn't exist
        this._group = this.viewer.toolbar.getControl('allMyAwesomeExtensionsToolbar');
        if (!this._group) {
            this._group = new Autodesk.Viewing.UI.ControlGroup('allMyAwesomeExtensionsToolbar');
            this.viewer.toolbar.addControl(this._group);
        }

        // Add a new button to the toolbar group
        this._button = new Autodesk.Viewing.UI.Button('myAwesomeExtensionButton');
        this._button.onClick = (ev) => {
			// Execute an action here
			const sendViaWhatsapp = () => {
				const a = document.querySelectorAll(".shareWhatsapp");
					a.forEach(el => {
						const text = el.getAttribute('data-message'),
								url= el.getAttribute('data-url'),
								 link = (el.hasAttribute('data-url') ? url : window.location.href);
							  el.setAttribute("href", `https://api.whatsapp.com/send?text=${text}: ${link}`);
					})
				}
				
				
				sendViaWhatsapp();

        };
        this._button.setToolTip('Send WhatsApp');
        this._button.addClass('myAwesomeExtensionIcon');
		this._group.addControl(this._button);
		

    }	
}	
	
Autodesk.Viewing.theExtensionManager.registerExtension('wp', wp);
