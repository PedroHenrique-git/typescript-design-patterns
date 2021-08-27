import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz quarto');
const bathroomLight = new SmartHouseLight('Luz banheiro');

// Command
const bedroomlightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomlightPowerCommand = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomlightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomlightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.executeCommand('btn-3');

for (let i = 0; i < 200; i += 1) {
  console.log(smartHouseApp.undoCommand('btn-3'));
}
