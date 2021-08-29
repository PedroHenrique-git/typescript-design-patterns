import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupMange = new ImageEditorBackupManager(imageEditor);

backupMange.backup();
imageEditor.convertFormatTo('gif');
backupMange.undo();
console.log(imageEditor);
