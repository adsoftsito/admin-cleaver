import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {
  tutorial: Tutorial = new Tutorial();
  submitted = false;

  itemApPaternoError = '';
  itemApMaternoError = '';
  itemNombreError = '';
  itemMatriculaError = '';
  itemCarreraError = '';


  item1Error = '';
  item2Error = '';
  item3Error = '';
  item4Error = '';
  item5Error = '';
  item6Error = '';
  item7Error = '';
  item8Error = '';
  item9Error = '';
  item10Error = '';
  item11Error = '';
  item12Error = '';
  item13Error = '';
  item14Error = '';
  item15Error = '';
  item16Error = '';
  item17Error = '';
  item18Error = '';
  item19Error = '';
  item20Error = '';
  item21Error = '';
  item22Error = '';
  item23Error = '';
  item24Error = '';
  
  missingValuesError = '';

  arrMD : Array<number> = [1,
    5,
    10,
    20,
    30,
    40,
    50,
    60,
    65,
    75,
    84,
    87,
    90,
    93,
    95,
    97,
    97,
    98,
    98,
    98,
    99];

arrMI : Array<number> = [
4,
10,
25,
40,
55,
70,
82,
90,
95,
96,
97,
97,
97,
97,
97,
97,
97,
99];

arrMS : Array<number> = [
5,
10,
16,
30,
40,
55,
63,
75,
84,
90,
95,
96,
97,
97,
97,
97,
98,
98,
98,
99]

arrMC : Array<number> = [
1,
5,
16,
30,
55,
70,
84,
93,
95,
97,
97,
97,
98,
98,
98,
99
]


arrLD : Array<number> = [
99,
95,
87,
80,
65,
55,
50,
35,
30,
20,
18,
15,
10,
6,
5,
4,
3,
2,
2,
2,
2,
1
];

arrLI : Array<number> = [
99,
95,
87,
75,
55,
40,
25,
16,
10,
5,
4,
4,
3,
3,
3,
2,
2,
2,
2,
1
];

arrLS : Array<number> = [
  99,
  97,
  95,
  87,
  80,
  65,
  55,
  35,
  28,
  18,
  10,
  5,
  4,
  3,
  3,
  3,
  2,
  2,
  2,
  1  
]

arrLC : Array<number> = [
  99,
  97,
  95,
  90,
  84,
  70,
  55,
  40,
  38,
  23,
  10,
  5,
  4,
  3,
  2,
  2,
  1
]

arrtempTC : number[][] = [
[-21,	1],
[-20,	2],
[-19,	2],
[-18,	2],
[-17,	2],
[-16,	2],
[-15,	2],
[-14,	2],
[-13,	4],
[-12,	5],
[-11,	5],
[-10,	9],
[-9,	13],
[-8,	15],
[-7,	16],
[-6,	20],
[-5,	25],
[-4,	29],
[-3,	35],
[-2, 40],
[-1,	45],
[0,	50],
[1,	55],
[2,	60],
[3,	65],
[4,	67],
[5,	70],
[6,	75],
[7,	80],
[8,	84],
[9,	85],
[10,	90],
[11,	91],
[12,	94],
[13,	95],
[14,	96],
[15,	97],
[16,	97],
[17,	98],
[18,	98],
[19,	98],
[20,	99]
]

arrTD  = {
  '-21':	1,
  '-20':	2,
  '-19':	2,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	4,
  '-12':	5,
  '-11':	5,
  '-10':	9,
  '-9':	13,
  '-8':	15,
  '-7':	16,
  '-6':	20,
  '-5':	25,
  '-4':	29,
  '-3':	35,
  '-2': 40,
  '-1':	45,
  '0':	50,
  '1':	55,
  '2':	60,
  '3':	65,
  '4':	67,
  '5':	70,
  '6':	75,
  '7':	80,
  '8': 84,
  '9':	85,
  '10':	90,
  '11':	91,
  '12':	94,
  '13':	95,
  '14':	96,
  '15':	97,
  '16':	97,
  '17':	98,
  '18':	98,
  '19':	98,
  '20':	99
};


arrTI  = {
  '-19':	1,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	2,
  '-11':	2,
  '-10':	3,
  '-9':	4,
  '-8':	5,
  '-7':	6,
  '-6':	10,
  '-5':	16,
  '-4':	20,
  '-3':	29,
  '-2': 35,
  '-1':	45,
  '0':	55,
  '1':	60,
  '2':	70,
  '3':	75,
  '4':	85,
  '5':	90,
  '6':	95,
  '7':	96,
  '8': 97,
  '9':	97,
  '10':	98,
  '11':	98,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	98,
  '16':	98,
  '17':	99

};

arrTS  = {
  '-19':	1,
  '-18':	2,
  '-17':	2,
  '-16':	2,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	3,
  '-11':	4,
  '-10':	5,
  '-9':	8,
  '-8':	10,
  '-7':	15,
  '-6':	20,
  '-5':	25,
  '-4':	30,
  '-3':	35,
  '-2': 40,
  '-1':	50,
  '0':	57,
  '1':	60,
  '2':	70,
  '3':	75,
  '4':	80,
  '5':	84,
  '6':	87,
  '7':	91,
  '8': 94,
  '9':	96,
  '10':	97,
  '11':	97,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	98,
  '16':	98,
  '17':	98,
  '18':	98,
  '19':	99
};

arrTC  = {
  '-16':	1,
  '-15':	2,
  '-14':	2,
  '-13':	2,
  '-12':	2,
  '-11':	3,
  '-10':	4,
  '-9':	6,
  '-8':	9,
  '-7':	13,
  '-6':	20,
  '-5':	25,
  '-4':	30,
  '-3':	35,
  '-2': 55,
  '-1':	60,
  '0':	70,
  '1':	75,
  '2':	84,
  '3':	90,
  '4':	95,
  '5':	96,
  '6':	97,
  '7':	97,
  '8': 98,
  '9':	98,
  '10':	98,
  '11':	98,
  '12':	98,
  '13':	98,
  '14':	98,
  '15':	99
};


arrInter  = {
  '1':	'Persuasivo	el que tiene fuerza para hacer creer a otros una cosa, convencer de algo.',
  '2':	'Gentil	el que actúa con cortesía y soltura, con urbanidad. El amable, gallardo, con gracia.',
  '3':	'Humilde	sencillo, que no alardea (no interpretar como vida cristiana)',
  '4':	'Original	el que no es imitación de otro, el singular.',
  '5':	'Agresivo	el que demuestra empuje e iniciativa en una forma positiva, no es el propenso a ofender.',
  '6':	'Alma de la fiesta	el más popular, el que genera mayor atracción en  el grupo.',
  '7':	'Comodino	el amante de la comodidad, que busca caminos fáciles.',
  '8': 'Temeroso	el tímido, el cobarde, aprensivo.',
  '9':	'Agradable	el que agrada y complace, gusta a los demás.',
  '10':	'Temeroso de Dios	el que reconoce el poder de Dios sobre todas las cosas, religioso',
  '11':	'Tenaz	el obstinado y testarudo, con inquebrantable fuerza de voluntad para realizar algún objetivo.',
  '12':	'Atractivo	cualidad de la persona (encanto) que atrae la voluntad de los demás.',
  '13':	'Cauteloso	el reservado que actúa con cuidado, con precaución.',
  '14':	'Determinado	el atrevido, que toma resoluciones, preciso y decidido, que define.',
  '15': 'Convincente	el que sabe convencer y obligar a otro con razones a que reconozca una cosa o cambie de opinión.',
  '25': 'Fuerza de voluntad	determinación inquebrantable para lograr algo, firmeza.',
  '26': 'Mente abierta	cualidad para escuchar y recibir otro punto de vista diferente.',
  '27': 'Complaciente	el que procura ser agradable, servicial, solícito, comedido, conciliador o deferente.',
  '28': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
  '29': 'Confiado	el presumido y vanidoso, crédulo y sencillo. No el que confía en sí mismo.',
  '30': 'Simpatizador	el que manifiesta inclinación o afecto natural hacia otras personas.',
  '31': 'Tolerante	el que reconoce y respeta las opiniones, prácticas y comportamiento de otros, aunque sean diferentes a las de él. No el que sufre con paciencia o el que deja pasar cosas que no son lícitas.',
  '32': 'Afirmativo	el que responde en la mayoría de las ocasiones de una manera positiva. No el que se sostiene o ratifica lo dicho.',
  '33': 'Ecuánime	el calmado, sereno, imparcial, inalterable, paciente, prudente. Que tiene siempre el mismo ánimo.',
  '34': 'Preciso	el puntual y exacto, con claridad y determinado.',
  '35': 'Nervioso	el ansioso, al que le falta sentido de seguridad',
  '36': 'Jovial	el apacible, alegre y festivo.',
  '37': 'Disciplinado	el acostumbrado a la obediencia, a seguir las reglas.',
  '38': 'Generoso	el que obra con magnanimidad y nobleza, liberal dadivoso y franco.',
  '39': 'Animoso	el que demuestra valor, energía voluntad, intención y esfuerzo para la lucha o el trabajo.',
  '40': 'Persistente	el que supera obstáculos, el que es constante, y perseverante, el que se mantiene en un propósito.',
  '41': 'Competitivo	el que contiende o disputa con otros por una causa de superación común por perfección o por la posesión de propiedades.',
  '42': 'Alegre	el  que está lleno de alegría y la ocasiona en otros. Contento de animo, festivo.',
  '43': 'Considerado	el que obra con reflexión y que trata con respeto a los demás.',
  '44': 'Armonioso	el que tiene amistad y buena correspondencia, el que no tiene fricciones con otros.',
  '45': 'Admirable	que es digno de admiración. Notable.',
  '46': 'Bondadoso	el que es muy bueno, humanitario.',
  '47': 'Resignado	el que se conforma, se sujeta, el condescendiente. El que acepta estar bajo la voluntad de otro.',
  '48': 'Carácter firme	que no cambia fácilmente su punto de vista o su estilo de condición.',
  '49': 'Obediente	el que sabe seguir indicaciones sin poner su creatividad, cumple voluntad de quien manda, dócil, subordinado.',
  '50': 'Quisquilloso	el que fácilmente se agravia u ofende, demasiado delicado en el trato, meticuloso.',
  '51': 'Inconquistable	que no se deja vencer con ruegos, detalles o agasajos, susceptible.',
  '52': 'Juguetón	el que tiene buen sentido del humor, aficionado a bromas.',
  '53': 'Respetuoso	el que guarda reverencia, consideración y cortesía para los demás.',
  '54': 'Emprendedor	que muestra imaginación instintiva y empuje, que se dedica a resolver situaciones difíciles. Atrevido.',
  '55': 'Optimista	el que suele ver y juzgar las cosas bajo su aspecto más favorable.',
  '56': 'Servicial	el que sirve con diligencia, siempre dispuesto a complacer a otros, amable y colaborador.',
  '57': 'Valiente	el que manifiesta coraje y decisión. El fuerte, enérgico y animoso.',
  '58': 'Inspirador	el que anima la mente o las emociones de otros; infunde entusiasmo.',
  '59': 'Sumiso	el que permite por sí mismo estar sujeto a otro. Obediente y dócil.',
  '60': 'Tímido	callado, no busca sobresalir.',
  '61': 'Adaptable	el que se ajusta fácilmente a condiciones nuevas o diferentes.',
  '62': 'Disputador	dado a argüir o debatir razones para, por o contra algo. Discutidor.',
  '63': 'Indiferente	el que parece en forma sistemática no estar involucrado. No presenta motivo de preferencia.',
  '64': '"Sangre liviana"	el que a todo el mundo le cae bien, persona simpática.',
  '65': 'Amiguero	el que busca y goza la compañía de otros, muy sociable.',
  '66': 'Paciente	el que es capaz de soportar, sabe esperar con calma el momento oportuno.',
  '67': 'Confianza en sí mismo	confía en sus propias capacidades y recursos, autosuficiente.',
  '68': 'Mesurado para hablar	medido para hablar, habla lo necesario.',
  '69': 'Conforme	el satisfecho con lo que tiene, de acuerdo con el parecer de otros.',
  '70':	'Confiable	persona con la cual se tiene confianza.',
  '71':	'Pacífico	el que tiene calma y serenidad, amante de la paz.',
  '72':	'Positivo	optimista.',  
  '73': 'Aventurero	el que busca aventuras',
  '74': 'Receptivo	persona con capacidad de recibir, facilidad para captar algo',
  '75': 'Cordial	persona amable, afectuosa, cariñosa.',
  '76': 'Moderado	guarda medio entre dos extremos, que mantiene un equilibrio en sus acciones.',
  '77': 'Indulgente	el que perdona fácilmente, tolerante, conciliador.',
  '78': 'Esteta	el que es aficionado, percibe o cultiva la belleza. Busca en todo la elegancia.',
  '79': 'Vigoroso	el robusto y fuerte.',
  '80': 'Sociable	el que busca y necesita del compañerismo de otros, fácil de tratar con él.',
  '81': 'Parlanchín	persona locuaz, que tiene inclinación por hablar mucho, platicador.',
  '82': 'Controlado	ejerce influencia resultante en sí mismo y en otros, con dominio de sí.',
  '83': 'Convencional	el que se mantiene en una trayectoria de uso general.',
  '84': 'Decisivo	el resuelto, determinado e incuestionable.',
  '85': 'Cohibido	el que se limita, restringe o controla ante los demás.',
  '86': 'Exacto	justo, preciso, matemático, calculador.',
  '87': 'Franco	espontáneo, leal, sincero.',
  '88': 'Buen compañero	persona sociable, que mantiene armonía con otros.',
  '89': 'Diplomático	el que se caracteriza por el buen tacto en su trato con la gente.',
  '90':	'Audaz	el arrogante e insolente. No el osado ni atrevido.',
  '91': 'Refinado	el elegante y fino en su manera de ser, se distingue.',
  '92': 'Satisfecho	se contenta o conforma con lo que tiene.',
  '93': 'Inquieto	el que gusta de lo nuevo, versátil y cambiante.',
  '94': 'Popular	el que genera atracción en el grupo.',
  '95': 'Buen vecino	el que actúa con soltura y cortesía.',
  '96': 'Devoto	el sumiso y fiel.'
};

  MD: any;
  MI: any;
  MS: any;
  MC: any;
  
  LD: any;
  LI: any;
  LS: any;
  LC: any;
  
  TotD: any;
  TotI: any;
  TotS: any;
  TotC: any;

  ResultMD: any;
  ResultMI: any;
  ResultMS: any;
  ResultMC: any;
  
  ResultLD: any;
  ResultLI: any;
  ResultLS: any;
  ResultLC: any;
  
  ResultTotD: any;
  ResultTotI: any;
  ResultTotS: any;
  ResultTotC: any;

  FinalT: any;
  FinalM: any;
  FinalL: any;

  FinalResult: any;
  Result: any;

  message = '';
greenClass: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;


  validateText(myText : string) {
    var textFill = 0;
    console.log(myText);
    
    if ((myText != "-")&&(myText!=""))
      textFill = 1;
    return textFill;
  }
  constructor(private tutorialService: TutorialService) { 
    this.tutorial.appPaterno = "-";
    this.tutorial.appMaterno = "-";
    this.tutorial.nombre = "-";
    this.tutorial.facebook = "-";
    this.tutorial.programaInteres = "-";

  }

  validateGroups(): number {
    var sumGroups = 0;

    var itemApPaterno = this.validateText(this.tutorial.appPaterno as string);
    if (itemApPaterno == 0) this.itemApPaternoError = "Ap Paterno requerido."
        else this.itemApPaternoError = ""

    var itemApMaterno = this.validateText(this.tutorial.appMaterno as string);
    if (itemApMaterno == 0) this.itemApMaternoError = "Ap Materno requerido."
        else this.itemApMaternoError = ""

    var itemNombre = this.validateText(this.tutorial.nombre as string);
    if (itemNombre == 0) this.itemNombreError = "Nombre requerido."
        else this.itemNombreError = ""

    var itemMatricula = this.validateText(this.tutorial.facebook as string);
    if (itemMatricula == 0) this.itemMatriculaError = "Matricula requerida."
        else this.itemMatriculaError = ""
    
    var itemCarrera = this.validateText(this.tutorial.programaInteres as string);
    if (itemCarrera == 0) this.itemCarreraError = "Carrera requerida."
            else this.itemCarreraError = ""
    
    var item1 = this.validateItem(this.tutorial.persuasivoM as number, 
                                  this.tutorial.persuasivoL as number, 
                                  this.tutorial.gentilM as number, 
                                  this.tutorial.gentilL as number, 
                                  this.tutorial.humildeM as number, 
                                  this.tutorial.humildeL as number, 
                                  this.tutorial.originalM as number, 
                                  this.tutorial.originalL as number, 
                                );
    if (item1 < 2) 
      this.item1Error = "Grupo 1 requerido ...";
    
    var item2 = this.validateItem(this.tutorial.fuerzavoluntadM as number, 
                                  this.tutorial.fuerzavoluntadL as number, 
                                  this.tutorial.menteabiertaM as number, 
                                  this.tutorial.menteabiertaL as number, 
                                  this.tutorial.complacienteM as number, 
                                  this.tutorial.complacienteL as number, 
                                  this.tutorial.animosoM as number, 
                                  this.tutorial.animosoL as number, 
    );
    if (item2 < 2) 
      this.item2Error = "Grupo 2 requerido ...";
    
    var item3 = this.validateItem(
      this.tutorial.obedienteM as number, 
      this.tutorial.obedienteL as number, 
      this.tutorial.quisquillosoM as number, 
      this.tutorial.quisquillosoL as number, 
      this.tutorial.inconquistableM as number, 
      this.tutorial.inconquistableL as number, 
      this.tutorial.juguetonM as number, 
      this.tutorial.juguetonL as number, 
    );
    if (item3 < 2) 
      this.item3Error = "Grupo 3 requerido ...";

    var item4 = this.validateItem(
      this.tutorial.aventureroM as number, 
      this.tutorial.aventureroL as number, 
      this.tutorial.receptivoM as number, 
      this.tutorial.receptivoL as number, 
      this.tutorial.cordialM as number, 
      this.tutorial.cordialL as number, 
      this.tutorial.moderadoM as number, 
      this.tutorial.moderadoL as number, 
    );
    if (item4 < 2) 
      this.item4Error = "Grupo 4 requerido ...";

    
    var item5 = this.validateItem(
      this.tutorial.agresivoM as number, 
      this.tutorial.agresivoL as number, 
      this.tutorial.almafiestaM as number, 
      this.tutorial.almafiestaL as number, 
      this.tutorial.comodinoM as number, 
      this.tutorial.comodinoL as number, 
      this.tutorial.temerosoM as number, 
      this.tutorial.temerosoL as number, 
    );
    if (item5 < 2) 
      this.item5Error = "Grupo 5 requerido ...";

    var item6 = this.validateItem(
      this.tutorial.confiadoM as number, 
      this.tutorial.confiadoL as number, 
      this.tutorial.simpatizadorM as number, 
      this.tutorial.simpatizadorL as number, 
      this.tutorial.toleranteM as number, 
      this.tutorial.toleranteL as number, 
      this.tutorial.afirmativoM as number, 
      this.tutorial.afirmativoL as number, 
    );
    if (item6 < 2) 
      this.item6Error = "Grupo 6 requerido ...";

    var item7 = this.validateItem(
      this.tutorial.respetuosoM as number, 
      this.tutorial.respetuosoL as number, 
      this.tutorial.emprendedorM as number, 
      this.tutorial.emprendedorL as number, 
      this.tutorial.optimistaM as number, 
      this.tutorial.optimistaL as number, 
      this.tutorial.servicialM as number, 
      this.tutorial.servicialL as number, 
    );
    if (item7 < 2) 
      this.item7Error = "Grupo 7 requerido ...";

    var item8 = this.validateItem(
      this.tutorial.indulgenteM as number, 
      this.tutorial.indulgenteL as number, 
      this.tutorial.estetaM as number, 
      this.tutorial.estetaL as number, 
      this.tutorial.vigorosoM as number, 
      this.tutorial.vigorosoL as number, 
      this.tutorial.sociableM as number, 
      this.tutorial.sociableL as number, 
    );
    if (item8 < 2) 
      this.item8Error = "Grupo 8 requerido ...";


    var item9 = this.validateItem(
      this.tutorial.agradableM as number, 
      this.tutorial.agradableL as number, 
      this.tutorial.temerosodiosM as number, 
      this.tutorial.temerosodiosL as number, 
      this.tutorial.tenazM as number, 
      this.tutorial.tenazL as number, 
      this.tutorial.atractivoM as number, 
      this.tutorial.atractivoL as number, 
    );
    if (item9 < 2) 
      this.item9Error = "Grupo 9 requerido ...";


    var item10 = this.validateItem(
      this.tutorial.ecuanimeM as number, 
      this.tutorial.ecuanimeL as number, 
      this.tutorial.precisoM as number, 
      this.tutorial.precisoL as number, 
      this.tutorial.nerviosoM as number, 
      this.tutorial.nerviosoL as number, 
      this.tutorial.jovialM as number, 
      this.tutorial.jovialL as number, 
    );
    if (item10 < 2) 
      this.item10Error = "Grupo 10 requerido ...";

    var item11 = this.validateItem(
      this.tutorial.valienteM as number, 
      this.tutorial.valienteL as number, 
      this.tutorial.inspiradorM as number, 
      this.tutorial.inspiradorL as number, 
      this.tutorial.sumisoM as number, 
      this.tutorial.sumisoL as number, 
      this.tutorial.timidoM as number, 
      this.tutorial.timidoL as number, 
    );
    if (item11 < 2) 
      this.item11Error = "Grupo 11 requerido ...";

    var item12 = this.validateItem(
      this.tutorial.parlanchinM as number, 
      this.tutorial.parlanchinL as number, 
      this.tutorial.controladoM as number, 
      this.tutorial.controladoL as number, 
      this.tutorial.convencionalM as number, 
      this.tutorial.convencionalL as number, 
      this.tutorial.decisivoM as number, 
      this.tutorial.decisivoL as number, 
    );
    if (item12 < 2) 
      this.item12Error = "Grupo 12 requerido ...";

    var item13 = this.validateItem(
      this.tutorial.cautelosoM as number, 
      this.tutorial.cautelosoL as number, 
      this.tutorial.determinadoM as number, 
      this.tutorial.determinadoL as number, 
      this.tutorial.convincenteM as number, 
      this.tutorial.convincenteL as number, 
      this.tutorial.bonachonM as number, 
      this.tutorial.bonachonL as number, 
    );
    if (item13 < 2) 
      this.item13Error = "Grupo 13 requerido ...";

    var item14 = this.validateItem(
      this.tutorial.disciplinadoM as number, 
      this.tutorial.disciplinadoL as number, 
      this.tutorial.generosoM as number, 
      this.tutorial.generosoL as number, 
      this.tutorial.ani_mosoM as number, 
      this.tutorial.ani_mosoL as number, 
      this.tutorial.persistenteM as number, 
      this.tutorial.persistenteL as number, 
    );
    if (item14 < 2) 
      this.item14Error = "Grupo 14 requerido ...";

    var item15 = this.validateItem(
      this.tutorial.adaptableM as number, 
      this.tutorial.adaptableL as number, 
      this.tutorial.disputadorM as number, 
      this.tutorial.disputadorL as number, 
      this.tutorial.indiferenteM as number, 
      this.tutorial.indiferenteL as number, 
      this.tutorial.sangrelivianaM as number, 
      this.tutorial.sangrelivianaL as number, 
    );
    if (item15 < 2) 
      this.item15Error = "Grupo 15 requerido ...";

    var item16 = this.validateItem(
      this.tutorial.cohibidoM as number, 
      this.tutorial.cohibidoL as number, 
      this.tutorial.exactoM as number, 
      this.tutorial.exactoL as number, 
      this.tutorial.francoM as number, 
      this.tutorial.francoL as number, 
      this.tutorial.buencompaneroM as number, 
      this.tutorial.buencompaneroL as number, 
    );
    if (item16 < 2) 
      this.item16Error = "Grupo 16 requerido ...";

    var item17 = this.validateItem(
      this.tutorial.docilM as number, 
      this.tutorial.docilL as number, 
      this.tutorial.atrevidoM as number, 
      this.tutorial.atrevidoL as number, 
      this.tutorial.lealM as number, 
      this.tutorial.lealL as number, 
      this.tutorial.encantadorM as number, 
      this.tutorial.encantadorL as number, 
    );
    if (item17 < 2) 
      this.item17Error = "Grupo 17 requerido ...";

    var item18 = this.validateItem(
      this.tutorial.competitivoM as number, 
      this.tutorial.competitivoL as number, 
      this.tutorial.alegreM as number, 
      this.tutorial.alegreL as number, 
      this.tutorial.consideradoM as number, 
      this.tutorial.consideradoL as number, 
      this.tutorial.armoniosoM as number, 
      this.tutorial.armoniosoL as number, 
    );
    if (item18 < 2) 
      this.item18Error = "Grupo 18 requerido ...";

    var item19 = this.validateItem(
      this.tutorial.amigueroM as number, 
      this.tutorial.amigueroL as number, 
      this.tutorial.pacienteM as number, 
      this.tutorial.pacienteL as number, 
      this.tutorial.confianzamismoM as number, 
      this.tutorial.confianzamismoL as number, 
      this.tutorial.mesuradohablarM as number, 
      this.tutorial.mesuradohablarL as number, 
    );
    if (item19 < 2) 
      this.item19Error = "Grupo 19 requerido ...";

    var item20 = this.validateItem(
      this.tutorial.diplomaticoM as number, 
      this.tutorial.diplomaticoL as number, 
      this.tutorial.audazM as number, 
      this.tutorial.audazL as number, 
      this.tutorial.refinadoM as number, 
      this.tutorial.refinadoL as number, 
      this.tutorial.satisfechoM as number, 
      this.tutorial.satisfechoL as number, 
    );
    if (item20 < 2) 
      this.item20Error = "Grupo 20 requerido ...";

    var item21 = this.validateItem(
      this.tutorial.dispuestoM as number, 
      this.tutorial.dispuestoL as number, 
      this.tutorial.deseosoM as number, 
      this.tutorial.deseosoL as number, 
      this.tutorial.consecuenteM as number, 
      this.tutorial.consecuenteL as number, 
      this.tutorial.entusiastaM as number, 
      this.tutorial.entusiastaL as number, 
    );
    if (item21 < 2) 
      this.item21Error = "Grupo 21 requerido ...";

    var item22 = this.validateItem(
      this.tutorial.admirableM as number, 
      this.tutorial.admirableL as number, 
      this.tutorial.bondadosoM as number, 
      this.tutorial.bondadosoL as number, 
      this.tutorial.resignadoM as number, 
      this.tutorial.resignadoL as number, 
      this.tutorial.caracterfirmeM as number, 
      this.tutorial.caracterfirmeL as number, 
    );
    if (item22 < 2) 
      this.item22Error = "Grupo 22 requerido ...";

    var item23 = this.validateItem(
      this.tutorial.conformeM as number, 
      this.tutorial.conformeL as number, 
      this.tutorial.confiableM as number, 
      this.tutorial.confiableL as number, 
      this.tutorial.pacificoM as number, 
      this.tutorial.pacificoL as number, 
      this.tutorial.positivoM as number, 
      this.tutorial.positivoL as number, 
    );
    if (item23 < 2) 
      this.item23Error = "Grupo 23 requerido ...";

    var item24 = this.validateItem(
      this.tutorial.inquietoM as number, 
      this.tutorial.inquietoL as number, 
      this.tutorial.popularM as number, 
      this.tutorial.popularL as number, 
      this.tutorial.buenvecinoM as number, 
      this.tutorial.buenvecinoL as number, 
      this.tutorial.devotoM as number, 
      this.tutorial.devotoL as number, 
    );
    if (item24 < 2) 
      this.item24Error = "Grupo 24 requerido ...";

    

    sumGroups = itemApPaterno + itemApMaterno + itemNombre + itemMatricula +  itemCarrera +
    item1 + item2 + item3 + item4 +
    item5 + item6 + item7 + item8 +
    item9 + item10 + item11 + item12 +
    item13 + item14 + item15 + item16 +
    item17 + item18 + item19 + item20 +
    item21 + item22 + item23 + item24; 
    console.log("total " + sumGroups);
    return sumGroups;
  }

  saveTutorial(): void {
    
    var sumGroups = this.validateGroups();
    //console.log(sumGroups);

    if (sumGroups < 53) {
      this.missingValuesError = "LLenar campos requeridos" 
    }
    else {
      this.calculateTest();
      this.missingValuesError = "guardando ..." 

       
      this.tutorialService.create(this.tutorial).then(() => {
         console.log('Created new item successfully!');
        this.submitted = true;
      });
    }
  }

  calculateTest() {

  
    console.log(this.tutorial);

    this.message = '';

    // 7
    this.MD = Number(this.tutorial.agresivoM) + 
              Number(this.tutorial.tenazM) +
              Number(this.tutorial.determinadoM) + 
              Number(this.tutorial.atrevidoM) +
              Number(this.tutorial.afirmativoM) + 
              Number(this.tutorial.persistenteM) + 
              Number(this.tutorial.competitivoM) + 
              Number(this.tutorial.caracterfirmeM) +
              Number(this.tutorial.inconquistableM) + 
              Number(this.tutorial.emprendedorM) + 
              Number(this.tutorial.valienteM) + 
              Number(this.tutorial.disputadorM) + 
              Number(this.tutorial.confianzamismoM) + 
              Number(this.tutorial.positivoM)
              Number(this.tutorial.aventureroM) + 
              Number(this.tutorial.vigorosoM) + 
              Number(this.tutorial.decisivoM) +
              Number(this.tutorial.francoM) + 
              Number(this.tutorial.audazM) + 
              Number(this.tutorial.inquietoM);
    // 1          
    this.MI = Number(this.tutorial.persuasivoM) + 
              Number(this.tutorial.almafiestaM) + 
              Number(this.tutorial.atractivoM) + 
              Number(this.tutorial.convincenteM) +
              Number(this.tutorial.encantadorM) + 
              Number(this.tutorial.animosoM) + 
              Number(this.tutorial.confiadoM) + 
              Number(this.tutorial.admirableM) +
              Number(this.tutorial.juguetonM) +
              Number(this.tutorial.optimistaM) + 
              Number(this.tutorial.inspiradorM) + 
              Number(this.tutorial.sangrelivianaM) + 
              Number(this.tutorial.amigueroM) + 
              Number(this.tutorial.cordialM) +
              Number(this.tutorial.sociableM) + 
              Number(this.tutorial.parlanchinM) + 
              Number(this.tutorial.buencompaneroM) +
              Number(this.tutorial.popularM);
    //10         
    this.MS = Number(this.tutorial.gentilM) + 
              Number(this.tutorial.comodinoM) + 
              Number(this.tutorial.bonachonM) + 
              Number(this.tutorial.lealM) +
              Number(this.tutorial.dispuestoM) + 
              Number(this.tutorial.complacienteM) +
              Number(this.tutorial.ecuanimeM) + 
              Number(this.tutorial.generosoM) +
              Number(this.tutorial.consideradoM) + 
              Number(this.tutorial.bondadosoM) + 
              Number(this.tutorial.obedienteM) + 
              Number(this.tutorial.servicialM) + 
              Number(this.tutorial.pacienteM) + 
              Number(this.tutorial.confiableM) +
              Number(this.tutorial.moderadoM) + 
              Number(this.tutorial.indulgenteM) +
              Number(this.tutorial.controladoM) + 
              Number(this.tutorial.satisfechoM) + 
              Number(this.tutorial.buenvecinoM);
    // 2
    this.MC = Number(this.tutorial.humildeM) + 
              Number(this.tutorial.temerosodiosM) + 
              Number(this.tutorial.cautelosoM) + 
              Number(this.tutorial.consecuenteM) +
              Number(this.tutorial.menteabiertaM) + 
              Number(this.tutorial.precisoM) + 
              Number(this.tutorial.disciplinadoM) +
              Number(this.tutorial.respetuosoM) +
              Number(this.tutorial.adaptableM) + 
              Number(this.tutorial.mesuradohablarM) + 
              Number(this.tutorial.pacificoM) + 
              Number(this.tutorial.receptivoM) + 
              Number(this.tutorial.exactoM) +
              Number(this.tutorial.diplomaticoM) +
              Number(this.tutorial.devotoM);
              
    // 4
    this.LD = Number(this.tutorial.originalL) + 
              Number(this.tutorial.tenazL) + 
              Number(this.tutorial.atractivoL) + 
              Number(this.tutorial.entusiastaL) +
              Number(this.tutorial.fuerzavoluntadL) + 
              Number(this.tutorial.afirmativoL) + 
              Number(this.tutorial.nerviosoL) + 
              Number(this.tutorial.persistenteL) +
              Number(this.tutorial.competitivoL) + 
              Number(this.tutorial.emprendedorM) + 
              Number(this.tutorial.caracterfirmeL) + 
              Number(this.tutorial.inconquistableL) + 
              Number(this.tutorial.emprendedorL) + 
              Number(this.tutorial.disputadorL)
              Number(this.tutorial.confianzamismoL) + 
              Number(this.tutorial.positivoL) + 
              Number(this.tutorial.aventureroL) + 
              Number(this.tutorial.vigorosoL) + 
              Number(this.tutorial.decisivoL) + 
              Number(this.tutorial.francoL)+
              Number(this.tutorial.audazL) + 
              Number(this.tutorial.inquietoL);

    // 7
    this.LI = Number(this.tutorial.almafiestaL) + 
              Number(this.tutorial.atractivoL) + 
              Number(this.tutorial.convincenteL) + 
              Number(this.tutorial.encantadorL) +
              Number(this.tutorial.animosoL) + 
              Number(this.tutorial.jovialL) + 
              Number(this.tutorial.ani_mosoL) + 
              Number(this.tutorial.alegreL) +
              Number(this.tutorial.juguetonL) + 
              Number(this.tutorial.optimistaL) + 
              Number(this.tutorial.sangrelivianaL) +
              Number(this.tutorial.amigueroL) +
              Number(this.tutorial.confiableL) +
              Number(this.tutorial.cordialL) +
              Number(this.tutorial.sociableL) + 
              Number(this.tutorial.parlanchinL) +
              Number(this.tutorial.buencompaneroL) + 
              Number(this.tutorial.refinadoL) + 
              Number(this.tutorial.popularL);

    // 5
    this.LS = Number(this.tutorial.gentilL) + 
              Number(this.tutorial.comodinoL) + 
              Number(this.tutorial.agradableL) + 
              Number(this.tutorial.complacienteL) +
              Number(this.tutorial.simpatizadorL) + 
              Number(this.tutorial.ecuanimeL) + 
              Number(this.tutorial.generosoL) + 
              Number(this.tutorial.consideradoL) +
              Number(this.tutorial.servicialL) +
              Number(this.tutorial.sumisoL) + 
              Number(this.tutorial.indiferenteL) + 
              Number(this.tutorial.pacienteL) + 
              Number(this.tutorial.conformeL) + 
              Number(this.tutorial.moderadoL) +
              Number(this.tutorial.indulgenteL) + 
              Number(this.tutorial.controladoL) + 
              Number(this.tutorial.cohibidoL) + 
              Number(this.tutorial.satisfechoL) +
              Number(this.tutorial.buenvecinoL);

    // 3
    this.LC = Number(this.tutorial.humildeL) + 
              Number(this.tutorial.temerosoL) + 
              Number(this.tutorial.temerosodiosL) + 
              Number(this.tutorial.cautelosoL) +
              Number(this.tutorial.docilL) + 
              Number(this.tutorial.consecuenteL) + 
              Number(this.tutorial.toleranteL) + 
              Number(this.tutorial.precisoL) +
              Number(this.tutorial.armoniosoL) +
              Number(this.tutorial.resignadoL) +
              Number(this.tutorial.quisquillosoL) +
              Number(this.tutorial.timidoL) + 
              Number(this.tutorial.pacificoL) + 
              Number(this.tutorial.estetaL)
              Number(this.tutorial.convencionalL) + 
              Number(this.tutorial.devotoL);

    this.TotD = Number(this.MD) - Number(this.LD);
    this.TotI = Number(this.MI) - Number(this.LI);
    this.TotS = Number(this.MS) - Number(this.LS);
    this.TotC = Number(this.MC) - Number(this.LC);


    this.ResultMD = this.arrMD[this.MD];
    this.ResultMI = this.arrMI[this.MI];
    this.ResultMS = this.arrMS[this.MS];
    this.ResultMC = this.arrMC[this.MC];

    this.ResultLD = this.arrLD[this.LD];
    this.ResultLI = this.arrLI[this.LI];
    this.ResultLS = this.arrLS[this.LS];
    this.ResultLC = this.arrLC[this.LC];


    this.ResultTotD = this.arrTD[(this.TotD as number)];
    this.ResultTotI = this.arrTI[(this.TotI as number)];
    this.ResultTotS = this.arrTS[(this.TotS as number)];
    this.ResultTotC = this.arrTC[(this.TotC as number)];


    var arrTotalT : Array<number> = [
      this.ResultTotD,
      this.ResultTotI,
      this.ResultTotS,
      this.ResultTotC,
    ]

    var arrTotalM : Array<number> = [
      this.ResultMD,
      this.ResultMI,
      this.ResultMS,
      this.ResultMC,
    ]

    var arrTotalL : Array<number> = [
      this.ResultLD,
      this.ResultLI,
      this.ResultLS,
      this.ResultLC,
    ]

    var maxFinalT = Math.max(...arrTotalT.map(o=>o));     
    var maxFinalM = Math.max(...arrTotalM.map(o=>o));     
    var maxFinalL = Math.max(...arrTotalL.map(o=>o));     

    this.FinalT = maxFinalT;
    this.FinalM = maxFinalM;
    this.FinalL = maxFinalL;

    this.FinalResult = (this.FinalT + this.FinalM + this.FinalL) / 3;
    this.Result = this.FinalResult.toFixed(0);
    this.message = this.arrInter[(this.Result as number)];


    //this.submitted = true;

    this.tutorial.FinalT = this.FinalT;
    this.tutorial.FinalM = this.FinalM;
    this.tutorial.FinalL = this.FinalL;

    this.tutorial.FinalResult = this.FinalResult;
    this.tutorial.Result = this.Result;
    this.tutorial.message = this.message;


    
    
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = new Tutorial();
  }

  setDuplicateError(value: number): string
  {
    var message = ""
    if (value ==1) 
      message = "ERROR: Seleccione Diferentes categorias";
    return message;
  }

  validateItem(value0: number, value1: number, value2: number, value3: number,
               value4: number, value5: number, value6: number, value7: number
  ): number
  {
    var sum = value0 + value1 + value2 + value3 + value4 + value5 + value6 + value7;
    if ((value0 == 1) && (value1 == 1)) sum = 0;
    if ((value2 == 1) && (value3 == 1)) sum = 0;
    if ((value4 == 1) && (value5 == 1)) sum = 0;
    if ((value6 == 1) && (value7 == 1)) sum = 0;

    return sum;
  }

  setM1(value: Number): Number {
    
    this.tutorial.persuasivoM = 0;
    this.tutorial.gentilM =0;
    this.tutorial.humildeM =0;
    this.tutorial.originalM =0;

    if  (value==0) {
      this.tutorial.persuasivoM = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.persuasivoL as number);
    }
    if  (value==1) {
      this.tutorial.gentilM = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.gentilL as number);
    }

    if  (value==2) {
      this.tutorial.humildeM = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.humildeL as number);
  }

  if  (value==3) {
      this.tutorial.originalM = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.originalL as number);
  }


    return 1;
}

setL1(value: Number): void {

    this.tutorial.persuasivoL = 0;
    this.tutorial.gentilL =0;
    this.tutorial.humildeL =0;
    this.tutorial.originalL =0;

    if  (value==0) {
      this.tutorial.persuasivoL = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.persuasivoM as number);
      /*
      if (this.tutorial.persuasivoM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
     else {
        this.item1Error = "";
      }*/
    }

    if  (value==1) {
      this.tutorial.gentilL = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.gentilM as number);
      /*
      if (this.tutorial.gentilM == 1)
        this.item1Error = "ERROR: Seleccione Diferentes categorias"
      else {
        this.item1Error = "";
      } */
    }
    if  (value==2) {
      this.tutorial.humildeL = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.humildeM as number);
    /*
    if (this.tutorial.humildeM == 1)
      this.item1Error = "ERROR: Seleccione Diferentes categorias"
    else {
      this.item1Error = "";
    } */
  }
    if  (value==3) {
      this.tutorial.originalL = 1;
      this.item1Error = this.setDuplicateError(this.tutorial.originalM as number);
    /*
    if (this.tutorial.originalM == 1)
      this.item1Error = "ERROR: Seleccione Diferentes categorias"
    else {
      this.item1Error = "";
    } */
  }

  }


  setM2(value: Number): Number {
    
    this.tutorial.fuerzavoluntadM = 0;
    this.tutorial.menteabiertaM =0;
    this.tutorial.complacienteM =0;
    this.tutorial.animosoM =0;

    if  (value==0) {
      this.tutorial.fuerzavoluntadM = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.fuerzavoluntadL as number);

    }

    if  (value==1) {
      this.tutorial.menteabiertaM = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.menteabiertaL as number);

    }
    if  (value==2) {
      this.tutorial.complacienteM = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.competitivoL as number);

    }
    if  (value==3) {
      this.tutorial.animosoM = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.animosoL as number);
    }

    return 1;
  }

  setL2(value: Number): Number {
    
    this.tutorial.fuerzavoluntadL = 0;
    this.tutorial.menteabiertaL =0;
    this.tutorial.complacienteL =0;
    this.tutorial.animosoL =0;

    if  (value==0) {
      this.tutorial.fuerzavoluntadL = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.fuerzavoluntadM as number);

    }
    
    if  (value==1) {
      this.tutorial.menteabiertaL = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.menteabiertaM as number);

    }

    if  (value==2) {
      this.tutorial.complacienteL = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.complacienteM as number);
    }
    
    if  (value==3) {
      this.tutorial.animosoL = 1;
      this.item2Error = this.setDuplicateError(this.tutorial.animosoM as number);
    }
    return 1;
  }

  setM3(value: Number): Number {
    
    this.tutorial.obedienteM = 0;
    this.tutorial.quisquillosoM =0;
    this.tutorial.inconquistableM =0;
    this.tutorial.juguetonM =0;

    if  (value==0) {
      this.tutorial.obedienteM = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.obedienteL as number);
    }

    if  (value==1) {
      this.tutorial.quisquillosoM = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.quisquillosoL as number);
    }

    if  (value==2) {
      this.tutorial.inconquistableM = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.inconquistableL as number);
    }

    if  (value==3) {
      this.tutorial.juguetonM = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.juguetonL as number);
    }

    return 1;
  }

  setL3(value: Number): Number {
    
    this.tutorial.obedienteL = 0;
    this.tutorial.quisquillosoL =0;
    this.tutorial.inconquistableL =0;
    this.tutorial.juguetonL =0;

    if  (value==0) {
      this.tutorial.obedienteL = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.obedienteM as number);
    }

    if  (value==1) {
      this.tutorial.quisquillosoL = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.quisquillosoM as number);
    }

    if  (value==2) {
      this.tutorial.inconquistableL = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.inconquistableM as number);
    }

    if  (value==3) {
      this.tutorial.juguetonL = 1;
      this.item3Error = this.setDuplicateError(this.tutorial.juguetonM as number);
    }

    return 1;
  }

  setM4(value: Number): Number {
    
    this.tutorial.aventureroM = 0;
    this.tutorial.receptivoM =0;
    this.tutorial.cordialM =0;
    this.tutorial.moderadoM =0;

    if  (value==0) {
      this.tutorial.aventureroM = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.aventureroL as number);
    }

    if  (value==1) {
      this.tutorial.receptivoM = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.receptivoL as number);
    }

    if  (value==2) {
      this.tutorial.cordialM = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.cordialL as number);
    }

    if  (value==3) {
      this.tutorial.moderadoM = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.moderadoL as number);
    }

    return 1;
  }

  setL4(value: Number): Number {
    
    this.tutorial.aventureroL = 0;
    this.tutorial.receptivoL =0;
    this.tutorial.cordialL =0;
    this.tutorial.moderadoL =0;

    if  (value==0) {
      this.tutorial.aventureroL = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.aventureroM as number);
    }

    if  (value==1) {
      this.tutorial.receptivoL = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.receptivoM as number);
    }

    if  (value==2) {
      this.tutorial.cordialL = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.cordialM as number);
    }

    if  (value==3) {
      this.tutorial.moderadoL = 1;
      this.item4Error = this.setDuplicateError(this.tutorial.moderadoM as number);
    }

    return 1;
  }


  setM5(value: Number): Number {

    this.tutorial.agresivoM = 0;
    this.tutorial.almafiestaM =0;
    this.tutorial.comodinoM =0;
    this.tutorial.temerosoM =0;

    if  (value==0) 
    {
      this.tutorial.agresivoM = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.agresivoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.almafiestaM = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.almafiestaL as number);
    }

    if  (value==2) 
    {
      this.tutorial.comodinoM = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.comodinoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.temerosoM = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.temerosoL as number);
    }

    return 1;
  }

  setL5(value: Number): Number {
    
    this.tutorial.agresivoL = 0;
    this.tutorial.almafiestaL =0;
    this.tutorial.comodinoL =0;
    this.tutorial.temerosoL =0;

    if  (value==0) 
    {
      this.tutorial.agresivoL = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.agresivoM as number);
    }
    
    if  (value==1) 
    {
      this.tutorial.almafiestaL = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.almafiestaM as number);
    }

    if  (value==2) 
    {
      this.tutorial.comodinoL = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.comodinoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.temerosoL = 1;
      this.item5Error = this.setDuplicateError(this.tutorial.temerosoM as number);
    }

    return 1;
  }

  setM6(value: Number): Number {

    this.tutorial.confiadoM = 0;
    this.tutorial.simpatizadorM =0;
    this.tutorial.toleranteM =0;
    this.tutorial.afirmativoM =0;

    if  (value==0) 
    {
      this.tutorial.confiadoM = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.confiadoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.simpatizadorM = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.simpatizadorL as number);
    }

    if  (value==2) 
    {
      this.tutorial.toleranteM = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.toleranteL as number);
    }

    if  (value==3) 
    {
      this.tutorial.afirmativoM = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.afirmativoL as number);
    }

    return 1;
  }

  setL6(value: Number): Number {

    this.tutorial.confiadoL = 0;
    this.tutorial.simpatizadorL =0;
    this.tutorial.toleranteL =0;
    this.tutorial.afirmativoL =0;

    if  (value==0) 
    {
      this.tutorial.confiadoL = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.confiadoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.simpatizadorL = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.simpatizadorM as number);
    }

    if  (value==2) 
    {
      this.tutorial.toleranteL = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.toleranteM as number);
    }

    if  (value==3) 
    {
      this.tutorial.afirmativoL = 1;
      this.item6Error = this.setDuplicateError(this.tutorial.afirmativoM as number);
    }

    return 1;
  }



  setM7(value: Number): Number {

    
    this.tutorial.respetuosoM = 0;
    this.tutorial.emprendedorM =0;
    this.tutorial.optimistaM =0;
    this.tutorial.servicialM =0;

    if  (value==0) 
    {
      this.tutorial.respetuosoM = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.respetuosoL as number);
    }
    
    if  (value==1) 
    {
      this.tutorial.emprendedorM = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.emprendedorL as number);
    }

    if  (value==2) 
    {
      this.tutorial.optimistaM = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.optimistaL as number);
    }

    if  (value==3) 
    {
      this.tutorial.servicialM = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.servicialL as number);
    }

    return 1;
  }

  setL7(value: Number): Number {

    
    this.tutorial.respetuosoL = 0;
    this.tutorial.emprendedorL =0;
    this.tutorial.optimistaL =0;
    this.tutorial.servicialL =0;

    if  (value==0) 
    {
      this.tutorial.respetuosoL = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.respetuosoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.emprendedorL = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.emprendedorM as number);
    }

    if  (value==2) 
    {
      this.tutorial.optimistaL = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.optimistaM as number);
    }

    if  (value==3) 
    {
      this.tutorial.servicialL = 1;
      this.item7Error = this.setDuplicateError(this.tutorial.servicialM as number);
    }

    return 1;
  }

  setM8(value: Number): Number {

      
    this.tutorial.indulgenteM = 0;
    this.tutorial.estetaM =0;
    this.tutorial.vigorosoM =0;
    this.tutorial.sociableM =0;

    if  (value==0) 
    {
      this.tutorial.indulgenteM = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.indulgenteL as number);
    }

    if  (value==1) 
    {
      this.tutorial.estetaM = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.estetaL as number);
    }

    if  (value==2) 
    {
      this.tutorial.vigorosoM = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.vigorosoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.sociableM = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.sociableL as number);
    }

    return 1;
  }

  setL8(value: Number): Number {

      
    this.tutorial.indulgenteL = 0;
    this.tutorial.estetaL =0;
    this.tutorial.vigorosoL =0;
    this.tutorial.sociableL =0;

    if  (value==0) 
    {
      this.tutorial.indulgenteL = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.indulgenteM as number);
    }

    if  (value==1) 
    {
      this.tutorial.estetaL = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.estetaM as number);
    }

    if  (value==2) 
    {
      this.tutorial.vigorosoL = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.vigorosoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.sociableL = 1;
      this.item8Error = this.setDuplicateError(this.tutorial.sociableM as number);
    }

    return 1;
  }

  setM9(value: Number): Number {

  
      
    this.tutorial.agradableM = 0;
    this.tutorial.temerosodiosM =0;
    this.tutorial.tenazM =0;
    this.tutorial.atractivoM =0;

    if  (value==0) 
    {
      this.tutorial.agradableM = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.agradableL as number);
    }

    if  (value==1) 
    {
      this.tutorial.temerosodiosM = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.temerosodiosL as number);
    }

    if  (value==2) 
    {
      this.tutorial.tenazM = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.tenazL as number);
    }

    if  (value==3) 
    {
      this.tutorial.atractivoM = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.atractivoL as number);
    }

    return 1;
  }

  setL9(value: Number): Number {

  
      
    this.tutorial.agradableL = 0;
    this.tutorial.temerosodiosL =0;
    this.tutorial.tenazL =0;
    this.tutorial.atractivoL =0;

    if  (value==0) 
    {
      this.tutorial.agradableL = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.agradableM as number);
    }

    if  (value==1) 
    {
      this.tutorial.temerosodiosL = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.temerosodiosM as number);
    }

    if  (value==2) 
    {
      this.tutorial.tenazL = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.tenazM as number);
    }

    if  (value==3) 
    {
      this.tutorial.atractivoL = 1;
      this.item9Error = this.setDuplicateError(this.tutorial.atractivoM as number);
    }
    
    return 1;
  }

  setM10(value: Number): Number {

      
    this.tutorial.ecuanimeM = 0;
    this.tutorial.precisoM =0;
    this.tutorial.nerviosoM =0;
    this.tutorial.jovialM =0;

    if  (value==0) 
    {
      this.tutorial.ecuanimeM = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.ecuanimeL as number);
    }

    if  (value==1) 
    {
      this.tutorial.precisoM = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.precisoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.nerviosoM = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.nerviosoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.jovialM = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.jovialL as number);
    }

    return 1;
  }

  setL10(value: Number): Number {

      
    this.tutorial.ecuanimeL = 0;
    this.tutorial.precisoL =0;
    this.tutorial.nerviosoL =0;
    this.tutorial.jovialL =0;

    if  (value==0) 
    {
      this.tutorial.ecuanimeL = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.ecuanimeM as number);
    }

    if  (value==1) 
    {
      this.tutorial.precisoL = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.precisoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.nerviosoL = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.nerviosoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.jovialL = 1;
      this.item10Error = this.setDuplicateError(this.tutorial.jovialM as number);
    }

    return 1;
  }

  setM11(value: Number): Number {


    this.tutorial.valienteM = 0;
    this.tutorial.inspiradorM =0;
    this.tutorial.sumisoM =0;
    this.tutorial.timidoM =0;

    if  (value==0) 
    {
      this.tutorial.valienteM = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.valienteL as number);
    }

    if  (value==1) 
    {
      this.tutorial.inspiradorM = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.inspiradorL as number);
    }

    if  (value==2) 
    {
      this.tutorial.sumisoM = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.sumisoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.timidoM = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.timidoL as number);
    }

    return 1;
  }

  setL11(value: Number): Number {


    this.tutorial.valienteL = 0;
    this.tutorial.inspiradorL =0;
    this.tutorial.sumisoL =0;
    this.tutorial.timidoL =0;

    if  (value==0) 
    {
      this.tutorial.valienteL = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.valienteM as number);
    }

    if  (value==1) 
    {
      this.tutorial.inspiradorL = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.inspiradorM as number);
    }

    if  (value==2) 
    {
      this.tutorial.sumisoL = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.sumisoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.timidoL = 1;
      this.item11Error = this.setDuplicateError(this.tutorial.timidoM as number);
    }

    return 1;
  }

  setM12(value: Number): Number {

    
    this.tutorial.parlanchinM = 0;
    this.tutorial.controladoM =0;
    this.tutorial.convencionalM =0;
    this.tutorial.decisivoM =0;

    if  (value==0) 
    {
      this.tutorial.parlanchinM = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.parlanchinL as number);
    }

    if  (value==1) 
    {
      this.tutorial.controladoM = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.controladoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.convencionalM = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.convencionalL as number);
    }

    if  (value==3) 
    {
      this.tutorial.decisivoM = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.decisivoL as number);
    }

    return 1;
  }

  setL12(value: Number): Number {

    
    this.tutorial.parlanchinL = 0;
    this.tutorial.controladoL =0;
    this.tutorial.convencionalL =0;
    this.tutorial.decisivoL =0;

    if  (value==0) 
    {
      this.tutorial.parlanchinL = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.parlanchinM as number);
    }

    if  (value==1) 
    {
      this.tutorial.controladoL = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.controladoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.convencionalL = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.convencionalM as number);
    }

    if  (value==3) 
    {
      this.tutorial.decisivoL = 1;
      this.item12Error = this.setDuplicateError(this.tutorial.decisivoM as number);
    }

    return 1;
  }

  setM13(value: Number): Number {

    
    this.tutorial.cautelosoM = 0;
    this.tutorial.determinadoM =0;
    this.tutorial.convincenteM =0;
    this.tutorial.bonachonM =0;

    if  (value==0) 
    {
      this.tutorial.cautelosoM = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.cautelosoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.determinadoM = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.determinadoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.convincenteM = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.convincenteL as number);
    }

    if  (value==3) 
    {
      this.tutorial.bonachonM = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.bonachonL as number);
    }

    return 1;
  }


  setL13(value: Number): Number {

    
    this.tutorial.cautelosoL = 0;
    this.tutorial.determinadoL =0;
    this.tutorial.convincenteL =0;
    this.tutorial.bonachonL =0;

    if  (value==0) 
    {
      this.tutorial.cautelosoL = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.cautelosoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.determinadoL = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.determinadoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.convincenteL = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.convincenteM as number);
    }

    if  (value==3) 
    {
      this.tutorial.bonachonL = 1;
      this.item13Error = this.setDuplicateError(this.tutorial.bonachonM as number);
    }

    return 1;
  }


  setM14(value: Number): Number {

    
    this.tutorial.disciplinadoM = 0;
    this.tutorial.generosoM =0;
    this.tutorial.ani_mosoM =0;
    this.tutorial.persistenteM =0;

    if  (value==0) 
    {
      this.tutorial.disciplinadoM = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.disciplinadoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.generosoM = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.generosoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.ani_mosoM = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.ani_mosoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.persistenteM = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.persistenteL as number);
    }

    return 1;
  }

  setL14(value: Number): Number {

    
    this.tutorial.disciplinadoL = 0;
    this.tutorial.generosoL =0;
    this.tutorial.ani_mosoL =0;
    this.tutorial.persistenteL =0;

    if  (value==0) 
    {
      this.tutorial.disciplinadoL = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.disciplinadoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.generosoL = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.generosoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.ani_mosoL = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.ani_mosoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.persistenteL = 1;
      this.item14Error = this.setDuplicateError(this.tutorial.persistenteM as number);
    }

    return 1;
  }

  setM15(value: Number): Number {

    this.tutorial.adaptableM = 0;
    this.tutorial.disputadorM =0;
    this.tutorial.indiferenteM =0;
    this.tutorial.sangrelivianaM =0;

    if  (value==0) 
    {
      this.tutorial.adaptableM = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.adaptableL as number);
    }

    if  (value==1) 
    {
      this.tutorial.disputadorM = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.disputadorL as number);
    }

    if  (value==2) 
    {
      this.tutorial.indiferenteM = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.indiferenteL as number);
    }

    if  (value==3) 
    {
      this.tutorial.sangrelivianaM = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.sangrelivianaL as number);
    }
    return 1;
  }

  setL15(value: Number): Number {

    this.tutorial.adaptableL = 0;
    this.tutorial.disputadorL =0;
    this.tutorial.indiferenteL =0;
    this.tutorial.sangrelivianaL =0;

    if  (value==0) 
    {
      this.tutorial.adaptableL = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.adaptableM as number);
    }

    if  (value==1) 
    {
      this.tutorial.disputadorL = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.disputadorM as number);
    }

    if  (value==2) 
    {
      this.tutorial.indiferenteL = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.indiferenteM as number);
    }

    if  (value==3) 
    {
      this.tutorial.sangrelivianaL = 1;
      this.item15Error = this.setDuplicateError(this.tutorial.sangrelivianaM as number);
    }

    return 1;
  }

  setM16(value: Number): Number {

  
    this.tutorial.cohibidoM = 0;
    this.tutorial.exactoM =0;
    this.tutorial.francoM =0;
    this.tutorial.buencompaneroM =0;

    if  (value==0) 
    {
      this.tutorial.cohibidoM = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.cohibidoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.exactoM = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.exactoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.francoM = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.francoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.buencompaneroM = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.buencompaneroL as number);
    }

    return 1;
  }

  setL16(value: Number): Number {

  
    this.tutorial.cohibidoL = 0;
    this.tutorial.exactoL =0;
    this.tutorial.francoL =0;
    this.tutorial.buencompaneroL =0;

    if  (value==0) 
    {
      this.tutorial.cohibidoL = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.cohibidoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.exactoL = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.exactoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.francoL = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.francoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.buencompaneroL = 1;
      this.item16Error = this.setDuplicateError(this.tutorial.buencompaneroM as number);
    }

    return 1;
  }

  setM17(value: Number): Number {

    this.tutorial.docilM = 0;
    this.tutorial.atrevidoM =0;
    this.tutorial.lealM =0;
    this.tutorial.encantadorM =0;

    if  (value==0) 
    {
      this.tutorial.docilM = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.docilL as number);
    }

    if  (value==1) 
    {
      this.tutorial.atrevidoM = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.atrevidoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.lealM = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.lealL as number);
    }

    if  (value==3) 
    {
      this.tutorial.encantadorM = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.encantadorL as number);
    }

    return 1;
  }

  setL17(value: Number): Number {

    this.tutorial.docilL = 0;
    this.tutorial.atrevidoL =0;
    this.tutorial.lealL =0;
    this.tutorial.encantadorL =0;

    if  (value==0) 
    {
      this.tutorial.docilL = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.docilM as number);
    }

    if  (value==1) 
    {
      this.tutorial.atrevidoL = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.atrevidoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.lealL = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.lealM as number);
    }

    if  (value==3) 
    {
      this.tutorial.encantadorL = 1;
      this.item17Error = this.setDuplicateError(this.tutorial.encantadorM as number);
    }

    return 1;
  }

  setM18(value: Number): Number {

    this.tutorial.competitivoM = 0;
    this.tutorial.alegreM =0;
    this.tutorial.consideradoM =0;
    this.tutorial.armoniosoM =0;

    if  (value==0) 
    {
      this.tutorial.competitivoM = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.competitivoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.alegreM = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.alegreL as number);
    }

    if  (value==2) 
    {
      this.tutorial.consideradoM = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.consideradoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.armoniosoM = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.armoniosoL as number);
    }

    return 1;
  }


  setL18(value: Number): Number {

    this.tutorial.competitivoL = 0;
    this.tutorial.alegreL =0;
    this.tutorial.consideradoL =0;
    this.tutorial.armoniosoL =0;

    if  (value==0) 
    {
      this.tutorial.competitivoL = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.competitivoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.alegreL = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.alegreM as number);
    }

    if  (value==2) 
    {
      this.tutorial.consideradoL = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.consideradoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.armoniosoL = 1;
      this.item18Error = this.setDuplicateError(this.tutorial.armoniosoM as number);
    }

    return 1;
  }

  setM19(value: Number): Number {
  
    this.tutorial.amigueroM = 0;
    this.tutorial.pacienteM =0;
    this.tutorial.confianzamismoM =0;
    this.tutorial.mesuradohablarM =0;

    if  (value==0) 
    {
      this.tutorial.amigueroM = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.amigueroL as number);
    }

    if  (value==1) 
    {
      this.tutorial.pacienteM = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.pacienteL as number);
    }

    if  (value==2) 
    {
      this.tutorial.confianzamismoM = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.confianzamismoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.mesuradohablarM = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.mesuradohablarL as number);
    }

    return 1;
  }

  setL19(value: Number): Number {
  
    this.tutorial.amigueroL = 0;
    this.tutorial.pacienteL =0;
    this.tutorial.confianzamismoL =0;
    this.tutorial.mesuradohablarL =0;

    if  (value==0) 
    {
      this.tutorial.amigueroL = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.amigueroM as number);
    }

    if  (value==1) 
    {
      this.tutorial.pacienteL = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.pacienteM as number);
    }

    if  (value==2) 
    {
      this.tutorial.confianzamismoL = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.confianzamismoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.mesuradohablarL = 1;
      this.item19Error = this.setDuplicateError(this.tutorial.mesuradohablarM as number);
    }

    return 1;
  }

  setM20(value: Number): Number {
  
  
    this.tutorial.diplomaticoM = 0;
    this.tutorial.audazM =0;
    this.tutorial.refinadoM =0;
    this.tutorial.satisfechoM =0;

    if  (value==0) 
    {
      this.tutorial.diplomaticoM = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.diplomaticoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.audazM = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.audazL as number);
    }

    if  (value==2) 
    {
      this.tutorial.refinadoM = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.refinadoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.satisfechoM = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.satisfechoL as number);
    }

    return 1;
  }

  setL20(value: Number): Number {
  
  
    this.tutorial.diplomaticoL = 0;
    this.tutorial.audazL =0;
    this.tutorial.refinadoL =0;
    this.tutorial.satisfechoL =0;

    if  (value==0) 
    {
      this.tutorial.diplomaticoL = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.diplomaticoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.audazL = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.audazM as number);
    }

    if  (value==2) 
    {
      this.tutorial.refinadoL = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.refinadoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.satisfechoL = 1;
      this.item20Error = this.setDuplicateError(this.tutorial.satisfechoM as number);
    }

    return 1;
  }

  setM21(value: Number): Number {
  

    this.tutorial.dispuestoM = 0;
    this.tutorial.deseosoM =0;
    this.tutorial.consecuenteM =0;
    this.tutorial.entusiastaM =0;

    if  (value==0) 
    {
      this.tutorial.dispuestoM = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.dispuestoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.deseosoM = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.deseosoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.consecuenteM = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.consecuenteL as number);
    }

    if  (value==3) 
    {
      this.tutorial.entusiastaM = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.entusiastaL as number);
    }

    return 1;
  }

  setL21(value: Number): Number {
  

    this.tutorial.dispuestoL = 0;
    this.tutorial.deseosoL =0;
    this.tutorial.consecuenteL =0;
    this.tutorial.entusiastaL =0;

    if  (value==0) 
    {
      this.tutorial.dispuestoL = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.dispuestoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.deseosoL = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.deseosoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.consecuenteL = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.consecuenteM as number);
    }

    if  (value==3) 
    {
      this.tutorial.entusiastaL = 1;
      this.item21Error = this.setDuplicateError(this.tutorial.entusiastaM as number);
    }

    return 1;
  }

  setM22(value: Number): Number {

    this.tutorial.admirableM = 0;
    this.tutorial.bondadosoM =0;
    this.tutorial.resignadoM =0;
    this.tutorial.caracterfirmeM =0;

    if  (value==0) 
    {
      this.tutorial.admirableM = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.admirableL as number);
    }

    if  (value==1) 
    {
      this.tutorial.bondadosoM = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.bondadosoL as number);
    }

    if  (value==2) 
    {
      this.tutorial.resignadoM = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.resignadoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.caracterfirmeM = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.caracterfirmeL as number);
    }

    return 1;
  }


  setL22(value: Number): Number {

    this.tutorial.admirableL = 0;
    this.tutorial.bondadosoL =0;
    this.tutorial.resignadoL =0;
    this.tutorial.caracterfirmeL =0;

    if  (value==0) 
    {
      this.tutorial.admirableL = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.admirableM as number);
    }

    if  (value==1) 
    {
      this.tutorial.bondadosoL = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.bondadosoM as number);
    }

    if  (value==2) 
    {
      this.tutorial.resignadoL = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.resignadoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.caracterfirmeL = 1;
      this.item22Error = this.setDuplicateError(this.tutorial.caracterfirmeM as number);
    }

    return 1;
  }

  setM23(value: Number): Number {  

    this.tutorial.conformeM = 0;
    this.tutorial.confiableM =0;
    this.tutorial.pacificoM =0;
    this.tutorial.positivoM =0;

    if  (value==0) 
    {
      this.tutorial.conformeM = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.conformeL as number);
    }

    if  (value==1) 
    {
      this.tutorial.confiableM = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.confiableL as number);
    }

    if  (value==2) 
    {
      this.tutorial.pacificoM = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.pacificoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.positivoM = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.positivoL as number);
    }

    return 1;
  }

  setL23(value: Number): Number {  

    this.tutorial.conformeL = 0;
    this.tutorial.confiableL =0;
    this.tutorial.pacificoL =0;
    this.tutorial.positivoL =0;

    if  (value==0) 
    {
      this.tutorial.conformeL = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.conformeM as number);
    }

    if  (value==1) 
    {
      this.tutorial.confiableL = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.confiableM as number);
    }

    if  (value==2) 
    {
      this.tutorial.pacificoL = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.pacificoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.positivoL = 1;
      this.item23Error = this.setDuplicateError(this.tutorial.positivoM as number);
    }

    return 1;
  }

  setM24(value: Number): Number {  

    
    this.tutorial.inquietoM = 0;
    this.tutorial.popularM =0;
    this.tutorial.buenvecinoM =0;
    this.tutorial.devotoM =0;

    if  (value==0) 
    {
      this.tutorial.inquietoM = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.inquietoL as number);
    }

    if  (value==1) 
    {
      this.tutorial.popularM = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.popularL as number);
    }

    if  (value==2) 
    {
      this.tutorial.buenvecinoM = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.buenvecinoL as number);
    }

    if  (value==3) 
    {
      this.tutorial.devotoM = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.devotoL as number);
    }

    return 1;
  }


  setL24(value: Number): Number {  

    
    this.tutorial.inquietoL = 0;
    this.tutorial.popularL =0;
    this.tutorial.buenvecinoL =0;
    this.tutorial.devotoL =0;

    if  (value==0) 
    {
      this.tutorial.inquietoL = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.inquietoM as number);
    }

    if  (value==1) 
    {
      this.tutorial.popularL = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.popularM as number);
    }

    if  (value==2) 
    {
      this.tutorial.buenvecinoL = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.buenvecinoM as number);
    }

    if  (value==3) 
    {
      this.tutorial.devotoL = 1;
      this.item24Error = this.setDuplicateError(this.tutorial.devotoM as number);
    }

    return 1;
  }

}