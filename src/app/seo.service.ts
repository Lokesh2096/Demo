import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title = 'Savya Jewels Business B2B Planform For Jewelry Industry'){
    this.title.setTitle(title)
  }
  
  changeMetaDescription(desc='Jewels Business B2B Planform F'){
    this.meta.updateTag({ name: 'description', content: desc })
  }
}
