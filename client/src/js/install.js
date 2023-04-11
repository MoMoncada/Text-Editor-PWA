const butInstall = document.getElementById("buttonInstall");

//-- retrieves the HTML element with the ID "buttonInstall" and stores it in the `butInstall` constant --//
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    // Store the triggered events
    window.deferredPrompt = event;

    
    butInstall.classList.toggle('hidden', false);
});


//-- When the button is clicked, it retrieves the "beforeinstallprompt" event that was stored earlier in the `window.deferredPrompt` property. If the event doesn't exist, the function returns and does nothing. If the event exists, it shows the installation prompt to the user, clears the `window.deferredPrompt` property, and adds the "hidden" class to the "buttonInstall" element to hide it again --//
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    
    if (!promptEvent) {
        return;
    }
    
    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});


//-- When this event is triggered, it logs a message to the console and clears the `window.deferredPrompt` property --//
window.addEventListener('appinstalled', (event) => {
    
    console.log('install hit')
    window.deferredPrompt = null;
}); 