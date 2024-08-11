import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  infos = [
    {
      title: "Qui sommes-nous ?",
      text_home: "“Au petit village” est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix.",
      img_home: "assets/pictures/home.jpeg",
      alt_home: "photo d'astérix et obélix",
      img_apropos: "assets/pictures/apropos.png",
      text_apropos: "Il était une fois, dans un petit village niché au cœur des collines verdoyantes, une entreprise artisanale nommée Au Petit Village. Spécialisée dans la confection de figurines inspirées de la célèbre bande dessinée Astérix et Obélix, cette entreprise était le joyau de la communauté locale.",
      alt_apropos: "photo du village gaulois"
    }
  ]
  constructor() { }
}
