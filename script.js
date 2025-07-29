function calculateStamina() {
    const stamina = parseFloat(document.getElementById('stamina-input').value);
    if (isNaN(stamina)) {
        document.getElementById('stamina-result').textContent = 'Please enter a valid number.';
        return;
    }
    const result = stamina * 1.5;
    document.getElementById('stamina-result').textContent = `Regenerated stamina: ${result}`;
}

function calculateFlame() {
    const flame = parseFloat(document.getElementById('flame-input').value);
    if (isNaN(flame)) {
        document.getElementById('flame-result').textContent = 'Please enter a valid number.';
        return;
    }
    const result = flame * 2;
    document.getElementById('flame-result').textContent = `Flame damage: ${result}`;
}

function calculateRock() {
    const rock = parseFloat(document.getElementById('rock-input').value);
    if (isNaN(rock)) {
        document.getElementById('rock-result').textContent = 'Please enter a valid number.';
        return;
    }
    const result = rock * 1.8;
    document.getElementById('rock-result').textContent = `Rock damage: ${result}`;
}

function calculateLiquid() {
    const liquid = parseFloat(document.getElementById('liquid-input').value);
    if (isNaN(liquid)) {
        document.getElementById('liquid-result').textContent = 'Please enter a valid number.';
        return;
    }
    const result = liquid * 1.2;
    document.getElementById('liquid-result').textContent = `Liquid damage: ${result}`;
}

function calculateWind() {
    const wind = parseFloat(document.getElementById('wind-input').value);
    if (isNaN(wind)) {
        document.getElementById('wind-result').textContent = 'Please enter a valid number.';
        return;
    }
    const result = wind * 1.6;
    document.getElementById('wind-result').textContent = `Wind damage: ${result}`;
}