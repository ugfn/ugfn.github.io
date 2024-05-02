let dependencyUrls = []
const maxLoadTimesTrys = 4;

//Main Libraries
dependencyUrls.push("https://www.googletagmanager.com/gtag/js?id=UA-118283036-6", "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js");
//Ads Libraries
dependencyUrls.push("dependency/adsController.js", "dependency/cpmstar.js", "dependency/moneyController.js");
//Firebase/Google Libraries
dependencyUrls.push("dependency/googleAnalytics.js", "dependency/firebase-init.js", "dependency/firebase-login.js", "dependency/firebase-config.js", "dependency/firebase-firestore.js")
//Game Libraries
dependencyUrls.push("dependency/unityUrls.js", "dependency/unityGame.js", "dependency/mobileRedirect.js", "dependency/fullscreen.js")
//etc. Libraries
dependencyUrls.push("dependency/windowResize.js", "dependency/blockManager.js", "dependency/macUserAgent.js", "dependency/visibilityChangeListener.js", "dependency/xsolla.js")

dynamicallyLoadScripts();

async function dynamicallyLoadScripts() {
    for (let i = 0; i < dependencyUrls.length; i++) {
        let url = dependencyUrls[i];
        let script = document.createElement("script");
        script.src = url;

        document.head.appendChild(script);
    }

    let trys = 0;
    while (window.loadedUrls === undefined || window.firebaseLoaded === undefined || window.adsLoaded === undefined
    || window.gameScriptLoaded === undefined || window.configInit === undefined || window.adsControllerLoaded === undefined) {
        await sleep(500)
        trys++;
        if(trys >= maxLoadTimesTrys) {
            break;
        }
    }

    isGameLoaded();
    initAds();
    loadGame();
    initFirebaseLibraries();
    fixMacUserAgent();
}

function loadGame() {
    let gameLoader = document.createElement("script")
    gameLoader.src = getGameLoaderUrl();
    gameLoader.id = "unity-loader"
    gameLoader.onload = function () {
        showGame();
    };

    let gameLoadDiv = document.getElementById("unity-loader-div");
    gameLoadDiv.innerHTML = "";
    gameLoadDiv.appendChild(gameLoader);
}

async function isGameLoaded() {
    await sleep(5000);
    if(window.gameStartLoading === undefined) {
        location.reload();
    }
}

function initFirebaseLibraries() {
    initializeFireBase();
    initRemoteConfig();
}

function onUnityReady() {
    checkAdBlock();
    sendConfig();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}