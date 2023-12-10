import { GroupCamera } from "../assets/reports/report1/fotos_camera";
import { Report3 } from "../assets/reports/report3";
import { Report4 } from "../assets/reports/report4";
import { Report5 } from "../assets/reports/report5";
import { Report7 } from "../assets/reports/report7";
import { Report8 } from "../assets/reports/report8";
import { Report9 } from "../assets/reports/report9";

const reportsInfo = [
  {
    id: 1,
    title: 'Relatório 1',
    description: 'Neste laboratório, realizamos uma série de fotografias e gravações com diferentes dispositivos, visando poder comparar os resultados neste relatório.',
    image: GroupCamera,
  },
  {
    id: 3,
    title: 'Relatório 3',
    description: 'Laboratório dedicado à manipulação de imagens para explorar suas propriedades de cor e compressão.',
    image: Report3,
  },
  {
    id: 4,
    title: 'Relatório 4',
    description: 'Laboratório dedicado à manipulação de imagens para explorar os métodos de codificação DWT e IDWT.',
    image: Report4,
  },
  {
    id: 5,
    title: 'Relatório 5',
    description: 'Laboratório dedicado à realização de testes psicoacústicos para avaliar a percepção do ser humano em relação ao som.',
    image: Report5,
  },
  {
    id: 7,
    title: 'Relatório 7',
    description: 'Laboratório dedicado à análise LPC da voz.',
    image: Report7,
  },
  {
    id: 8,
    title: 'Relatório 8',
    description: 'Laboratório dedicado ao estudo da codificação de áudio com ffmpeg.',
    image: Report8,
  },
  {
    id: 9,
    title: 'Relatório 9',
    description: 'Laboratório dedicado ao estudo do MIDI e Resposta Impulsiva (IR).',
    image: Report9,
  },
];

export default reportsInfo;
