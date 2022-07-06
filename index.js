import { createRoot } from 'react-dom/client';
import './index.css';
/**
 * Default map sample
 */
import * as React from "react";
import { MapAjax } from '@syncfusion/ej2-maps';
import { MapsComponent, Inject, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Legend, MapsTooltip } from '@syncfusion/ej2-react-maps';
import { SampleBase } from './sample-base';
import * as data from './map-data/default-datasource.json';
let datasource = data;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
let markers = [
    { name: 'Asia', latitude: 50.32087157990324, longitude: 90.015625 },
    { name: 'Australia', latitude: -25.88583769986199, longitude: 134.296875 },
    { name: 'Africa', latitude: 16.97274101999902, longitude: 16.390625 },
    { name: 'Europe', latitude: 49.95121990866204, longitude: 18.468749999999998 },
    { name: 'North America', latitude: 59.88893689676585, longitude: -109.3359375 },
    { name: 'South America', latitude: -6.64607562172573, longitude: -55.54687499999999 }
];
export class DefaultMaps extends SampleBase {
    render() {
        return (<div className='control-panel'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <MapsComponent id="maps" loaded={this.onMapsLoad.bind(this)} load={this.load} zoomSettings={{
                enable: false
            }} legendSettings={{
                visible: true
            }} titleSettings={{
                text: 'YouTube office locations',
                textStyle: {
                    size: '16px'
                }
            }}>
                        <Inject services={[Marker, Legend, MapsTooltip]}/>
                        <LayersDirective>
                            <LayerDirective shapeData={new MapAjax('https://ej2.syncfusion.com/react/demos/src/maps/map-data/world-map.json')} shapePropertyPath='continent' shapeDataPath='continent' dataSource={datasource.default} shapeSettings={{
                colorValuePath: 'color'
            }}>
                                <MarkersDirective>
                                    <MarkerDirective visible={true} template='<div style="font-size: 12px;color:white;text-shadow: 0px 1px 1px black;font-weight: 500;width:50px">{{:name}}</div>' animationDuration={0} dataSource={markers}>
                                    </MarkerDirective>
                                    <MarkerDirective visible={true} shape='Image' imageUrl='https://ej2.syncfusion.com/react/demos/src/maps/images/ballon.png' height={20} width={20} animationDuration={0} tooltipSettings={{
                visible: true,
                valuePath: 'name'
            }} dataSource={[
                { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
                { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
                { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' },
                { latitude: -23.5268201, longitude: -46.6489927, name: 'Bom Retiro' },
                { latitude: 43.6533855, longitude: -79.3729994, name: 'Toronto' },
                { latitude: 48.8773406, longitude: 2.3299627, name: 'Paris' },
                { latitude: 52.4643089, longitude: 13.4107368, name: 'Berlin' },
                { latitude: 19.1555762, longitude: 72.8849595, name: 'Mumbai' },
                { latitude: 35.6628744, longitude: 139.7345469, name: 'Minato' },
                { latitude: 51.5326602, longitude: -0.1262422, name: 'London' }
            ]}>

                                        </MarkerDirective>
                                </MarkersDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
                {/* Source Link */}
                <div style={{ float: 'right', marginRight: '10px' }}>Source: 
       <a href="https://craft.co/youtube/locations" target="_blank">craft.co/youtube/locations</a>
       </div>
        </div>);
    }
    onMapsLoad(args) {
        let maps = document.getElementById('maps');
        maps.setAttribute('title', '');
    }
    ;
}

const root = createRoot(document.getElementById('sample'));
root.render(<DefaultMaps />);