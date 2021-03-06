import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { MapViewModel } from './viewmodels/map.vm';
import { LatLng } from './viewmodels/lat-lng.interface';
import { OnChanges, SimpleChanges } from '@angular/core';
import { MarkerViewModel } from './viewmodels/marker.vm';

@Component({
  selector: 'nts-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.css']
})
export class LeafletMapComponent<T extends LatLng> implements AfterViewInit, OnChanges {

  @Input() selected: T | null;
  @Input() geoObjects: T[] | null = [];
  @Output() markerClick = new EventEmitter<T>();

  @ViewChild('mapCont')
  private mapContainer: ElementRef;

  private map: MapViewModel;
  private gMarkers: MarkerViewModel[] = [];

  constructor() { }

  ngAfterViewInit(): void {
    const el = this.mapContainer.nativeElement;
    this.map = new MapViewModel(el);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected) {
      this.highlightSelected();
    } else if (changes.geoObjects) {
      this.renderMarkers();
    }
  }

  private renderMarkers() {
    if (!this.map) {
      return;
    }
    if (this.geoObjects === null) {
      this.gMarkers = [];
      return;
    }
    this.gMarkers = this.geoObjects.map((marker) => {
      const gMarker: MarkerViewModel = this.map.createMarker(marker);
      gMarker.on('click', (obj: LatLng) => {
        this.markerClick.emit(obj as T);
        // this.appRef.tick();
      });
      return gMarker;
    });
    this.highlightSelected();
  }

  private highlightSelected() {
    this.gMarkers.forEach((gMarker) => {
      const isHighlighted: boolean = gMarker.matches(this.selected);
      gMarker.toggleHighlight(isHighlighted);
    });
  }
}
