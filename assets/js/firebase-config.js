const firebaseConfig = {
    apiKey: "AIzaSyCnm6F3L-bzNe3depUu_ptG8VRWcs6c",
    authDomain: "ppec-kpi-1724c.firebaseapp.com",
    projectId: "ppec-kpi-1724c",
    storageBucket: "ppec-kpi-1724c.firebasestorage.app",
    messagingSenderId: "567479315641",
    appId: "1:567479315641:web:0e1747bfc77c048917d68"
};

const isFirebaseConfigured = () => {
    return Object.values(firebaseConfig).some(value => {
        return typeof value === 'string' && value && !value.startsWith('YOUR_');
    });
};

const getFirebaseDb = () => {
    if (!isFirebaseConfigured()) {
        console.warn('Firebase is not configured yet. Update assets/js/firebase-config.js with your project credentials.');
        return null;
    }

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    return firebase.firestore();
};
