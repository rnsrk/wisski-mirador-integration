import Mirador from 'mirador/dist/es/src/index';
import AnnototAdapter from 'mirador-annotations/lib/AnnototAdapter';
import LocalStorageAdapter from 'mirador-annotations/lib/LocalStorageAdapter'
import miradorAnnotationPlugins from 'mirador-annotations';
import miradorDownloadPlugins from 'mirador-dl-plugin';
import { miradorImageToolsPlugin } from 'mirador-image-tools';


window.Mirador = Mirador;
// The used plugins is specified in the main js.
window.miradorPlugins = [  
{name: "annotations", plugin: miradorAnnotationPlugins},  
{name: "image-tools", plugin: miradorImageToolsPlugin},
{name: "dl-plugin", plugin: miradorDownloadPlugins},
];


// The endpoint of the external annotation server is set in the main js.
const annotationEndpoint = 'http://localhost/wisski/mirador-annotations';
// Bridge to store annotations.
window.miradorAnnotationServerAdapter = typeof annotationEndpoint !== 'undefined' && annotationEndpoint    
? function (canvasId, annotationEndpoint) {        
return new AnnototAdapter(canvasId, annotationEndpoint)    }    
: function (canvasId) {        return new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`);    };