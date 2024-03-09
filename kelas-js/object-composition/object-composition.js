// object composition digunakan untuk menghindari kode yang repetitif

class Developer {
    constructor(name) {
        this.name = name
    }

    commitChanges() {
        return `${this.name} is commiting changes...`
    }
}

function canBuiltUI(developer) {
    return {
        builtUI: () => {
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canBuiltAPI(developer) {
    return {
        builtAPI: () => {
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canDevloyApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is devloying app...`);
        }
    }
}

function fronEndDev (name) {
    const developer = new Developer(name);
    // Object.assign itu untuk membuat object baru dari object yang ada atau kata lain menggabungkan dari beberapa object yang ada
    return Object.assign(developer, canBuiltUI(developer));
}


const createFronEndDev = fronEndDev("fulan");
createFronEndDev.builtUI();
