import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  @Input()
  tutorial: Tutorial = new Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial = {
    appPaterno: '',
    appMaterno: '',
    nombre: '',
    persuasivoM: 0,
    persuasivoL:  0,
    gentilM:  0,
  gentilL:  0,
  humildeM:  0,
  humildeL:  0,
  originalM:  0,
  originalL:  0,

  fuerzavoluntadM:  0,
  fuerzavoluntadL:  0,
  menteabiertaM:  0,
  menteabiertaL:  0,
  complacienteM:  0,
  complacienteL:  0,
  animosoM:  0,
  animosoL:  0,


  obedienteM:  0,
  obedienteL:  0,
  quisquillosoM:  0,
  quisquillosoL:  0,
  inconquistableM:  0,
  inconquistableL:  0,
  juguetonM:  0,
  juguetonL:  0,


  aventureroM:  0,
  aventureroL:  0,
  receptivoM:  0,
  receptivoL:  0,
  cordialM:  0,
  cordialL:  0,
  moderadoM:  0,
  moderadoL:  0,

  agresivoM:  0,
  agresivoL:  0,
  almafiestaM:  0,
  almafiestaL:  0,
  comodinoM:  0,
  comodinoL:  0,
  temerosoM:  0,
  temerosoL:  0,

  confiadoM:  0,
  confiadoL:  0,
  simpatizadorM:  0,
  simpatizadorL:  0,
  toleranteM:  0,
  toleranteL:  0,
  afirmativoM:  0,
  afirmativoL:  0,

  respetuosoM:  0,
  respetuosoL:  0,
  emprendedorM:  0,
  emprendedorL:  0,
  optimistaM:  0,
  optimistaL:  0,
  servicialM:  0,
  servicialL:  0,

  indulgenteM:  0,
  indulgenteL:  0,
  estetaM:  0,
  estetaL:  0,
  vigorosoM:  0,
  vigorosoL:  0,
  sociableM:  0,
  sociableL:  0,

  agradableM:  0,
  agradableL:  0,
  temerosodiosM:  0,
  temerosodiosL:  0,
  tenazM:  0,
  tenazL:  0,
  atractivoM:  0,
  atractivoL:  0,

  ecuanimeM:  0,
  ecuanimeL:  0,
  precisoM:  0,
  precisoL:  0,
  nerviosoM:  0,
  nerviosoL:  0,
  jovialM:  0,
  jovialL:  0,

  valienteM:  0,
  valienteL:  0,
  inspiradorM:  0,
  inspiradorL:  0,
  sumisoM:  0,
  sumisoL:  0,
  timidoM:  0,
  timidoL:  0,

  parlanchinM:  0,
  parlanchinL:  0,
  controladoM:  0,
  controladoL:  0,
  convencionalM:  0,
  convencionalL:  0,
  decisivoM:  0,
  decisivoL:  0,

  cautelosoM:  0,
  cautelosoL:  0,
  determinadoM:  0,
  determinadoL:  0,
  convincenteM:  0,
  convincenteL:  0,
  bonachonM:  0,
  bonachonL:  0,

  disciplinadoM:  0,
  disciplinadoL:  0,
  generosoM:  0,
  generosoL:  0,
  ani_mosoM:  0,
  ani_mosoL:  0,
  persistenteM:  0,
  persistenteL:  0,

  adaptableM:  0,
  adaptableL:   0,
  disputadorM:  0,
  disputadorL:  0,
  indiferenteM:  0,
  indiferenteL:  0,
  sangrelivianaM:  0,
  sangrelivianaL:  0,

  cohibidoM:  0,
  cohibidoL:  0,
  exactoM:  0,
  exactoL:  0,
  francoM:  0,
  francoL:  0,
  buencompaneroM:  0,
  buencompaneroL:  0,
  
  docilM:  0,
  docilL:  0,
  atrevidoM:  0,
  atrevidoL:  0,
  lealM:  0,
  lealL:  0,
  encantadorM:  0,
  encantadorL:  0,
  
  competitivoM:  0,
  competitivoL:  0,
  alegreM:  0,
  alegreL:  0,
  consideradoM:  0,
  consideradoL:  0,
  armoniosoM:  0,
  armoniosoL:  0,

  amigueroM:  0,
  amigueroL:  0,
  pacienteM:  0,
  pacienteL:  0,
  confianzamismoM:  0,
  confianzamismoL:  0,
  mesuradohablarM:  0,
  mesuradohablarL:  0,

  diplomaticoM:  0,
  diplomaticoL:  0,
  audazM:  0,
  audazL:  0,
  refinadoM:  0,
  refinadoL:  0,
  satisfechoM:  0,
  satisfechoL:  0,

  dispuestoM:  0,
  dispuestoL:  0,
  deseosoM:  0,
  deseosoL:  0,
  consecuenteM:  0,
  consecuenteL:  0,
  entusiastaM:  0,
  entusiastaL:  0,

  admirableM:  0,
  admirableL:  0,
  bondadosoM:  0,
  bondadosoL:  0,
  resignadoM:  0,
  resignadoL:  0,
  caracterfirmeM:  0,
  caracterfirmeL:  0,

  conformeM:  0,
  conformeL:  0,
  confiableM:  0,
  confiableL:  0,
  pacificoM:  0,
  pacificoL:  0,
  positivoM:  0,
  positivoL:  0,

  inquietoM:  0,
  inquietoL:  0,
  popularM:  0,
  popularL:  0,
  buenvecinoM:  0,
  buenvecinoL:  0,
  devotoM:  0,
  devotoL:  0,

  FinalT:  0,
  FinalM: 0,
  FinalL:  0,

  FinalResult: 0,
  Result:  0,
  message : ''


  };

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

  /*
  r1:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  

  r2:number[][] = [[0,0,0,0],
                   [0,0,0,0],
                   [0,0,0,0]]  
*/

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };

    // 7
    this.MD = Number(this.tutorial.agresivoM) + 
              Number(this.tutorial.tenazM) +
              Number(this.tutorial.determinadoM) + 
              Number(this.tutorial.atrevidoM) +
              Number(this.currentTutorial.afirmativoM) + 
              Number(this.tutorial.persistenteM) + 
              Number(this.tutorial.competitivoM) + 
              Number(this.tutorial.caracterfirmeM) +
              Number(this.tutorial.inconquistableM) + 
              Number(this.tutorial.emprendedorM) + 
              Number(this.tutorial.valienteM) + 
              Number(this.tutorial.disputadorM) + 
              Number(this.tutorial.confianzamismoM) + 
              Number(this.tutorial.positivoM)
              Number(this.currentTutorial.aventureroM) + 
              Number(this.tutorial.vigorosoM) + 
              Number(this.tutorial.decisivoM) +
              Number(this.tutorial.francoM) + 
              Number(this.tutorial.audazM) + 
              Number(this.tutorial.inquietoM);
    // 1          
    this.MI = Number(this.currentTutorial.persuasivoM) + 
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
    this.MS = Number(this.currentTutorial.gentilM) + 
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
    this.LD = Number(this.currentTutorial.originalL) + 
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

  }

  updatePublished(status: boolean): void {
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
      .then(() => {
        // this.currentTutorial.published = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      title: this.currentTutorial.appPaterno,
      description: this.currentTutorial.appMaterno
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}