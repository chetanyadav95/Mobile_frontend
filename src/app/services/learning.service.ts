import { Injectable } from '@angular/core';
import { Blog } from '../models/blog.model';
import { Post } from '../models/post.model';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  videos: Video[] = [
    {
      name: "COURSE INTRODUCTION | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/fj7BZ-rNNp0"
    },
    {
      name: "1 - CAN TRADERS TRULY MAKE MONEY? -- TRADER'S 'SECRET' | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/4Xnb2muagQI"
    },
    {
      name: "2 - CHART READING PRINCIPLES & TIPS | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/ZpsiVG1uI4k"
    },
    {
      name: "3 - HOW TO READ PRICE CANDLESTICKS & PATTERNS | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/zzjWWME993I"
    },
    {
      name: "4 - HOW TO FIND SUPPORTS & RESISTANCES ON THE CHARTS | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/q2rzEfJmHXY"
    },
    {
      name: "5 - HOW TO USE MOVING AVERAGES IN TRADING | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/U2QVO_QMKYg"
    },
    {
      name: "6 - HOW TO USE TECHNICAL INDICATORS IN TRADING | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/gVb6vj_MsDE"
    },
    {
      name: "7 - HOW TO ANALYSE THE MARKET CYCLE | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/HFY-BrxzUsY"
    },
    {
      name: "8 - HOW TO TRADE TRENDS & TREND FOLLOWING STRATEGIES | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/Vr8CpV45uio"
    },
    {
      name: "9 - HOW TO TRADE BREAKOUTS & MARKETS IN RANGES | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/PhjdsX72RDo"
    },
    {
      name: "10 - HOW TO USE CHART PATTERNS IN TECHNICAL ANALYSIS | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/XMEMct6gRWE"
    },
    {
      name: "11 - HOW TO CALCULATE POSITION SIZE IN TRADING? | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/Pem8OQyiii0"
    },
    {
      name: "12 - RISK MANAGEMENT & TRADE MANAGEMENT IN TRADING | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/K2_fFOd7obs"
    },
    {
      name: "13 - HOW TO DESIGN YOUR OWN TRADING SYSTEM LIKE A PRO | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/T1Zfwygo5ww"
    },
    {
      name: "14 - CASE STUDY: COMPLETE GUIDE ON TURTLE TRADING SYSTEM | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/kBstdk-_kb8"
    },
    {
      name: "15 - TRADING PSYCHOLOGY & TOP WINNING TRADER'S MINDSET | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/c42agqmq5u0"
    },
    {
      name: "16 - TOP 12 WINNING HABITS OF MOST SUCCESSFUL TRADERS | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/uD9Iffyuds0"
    },
    {
      name: "17 - THE PROCESS OF BECOMING A TRADER | Complete Trading Tutorials For Beginners",
      url: "https://www.youtube-nocookie.com/embed/KldlanjmmdU"
    },
  ]
  blogs: Blog[] = [
    {
      name: '10 best JavaScript practices recommended by Top Developers',
      url: 'https://blog.hrithwik.me/10-best-javascript-practices-recommended-by-top-developers'
    },
    {
      name: '10 Inspiring Ideas for Your Next Front-End Project',
      url: 'https://dev.to/simonholdorf/10-inspiring-ideas-for-your-next-front-end-project-11bh'
    },
    {
      name: 'em, rem, and px',
      url: 'https://levelup.gitconnected.com/em-rem-and-px-e147619c26ee'
    },
  ]
  intraDay: Post[] = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
      shareName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
      imgURL: 'https://g.foolcdn.com/editorial/images/488994/getty-stock-market-data.jpg',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde sit suscipit veritatis, fugiat amet? Sed odio
      veniam tenetur, excepturi accusamus itaque dolor necessitatibus, ipsam atque, iste in esse est magni quia quibusdam.
      Aut, dolorem excepturi laboriosam tenetur, quas hic at praesentium pariatur eos temporibus, in cum modi amet blanditiis
      repudiandae vel quasi. Laborum aliquam molestias necessitatibus voluptatem voluptate iusto sapiente ducimus magni
      laudantium dolores doloribus deleniti nam eos autem praesentium omnis voluptatibus harum, rem sit eum, eligendi ea
      tempora. Eveniet odio, fugiat libero sequi officiis a distinctio vel sit totam facilis, laboriosam quam sapiente ducimus
      possimus natus perferendis soluta.`
    }
  ]
  positional: Post[] = [
    {
      name: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
      shareName: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, vero.',
      imgURL: 'https://g.foolcdn.com/editorial/images/488994/getty-stock-market-data.jpg',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus unde sit suscipit veritatis, fugiat amet? Sed odio
      veniam tenetur, excepturi accusamus itaque dolor necessitatibus, ipsam atque, iste in esse est magni quia quibusdam.
      Aut, dolorem excepturi laboriosam tenetur, quas hic at praesentium pariatur eos temporibus, in cum modi amet blanditiis
      repudiandae vel quasi. Laborum aliquam molestias necessitatibus voluptatem voluptate iusto sapiente ducimus magni
      laudantium dolores doloribus deleniti nam eos autem praesentium omnis voluptatibus harum, rem sit eum, eligendi ea
      tempora. Eveniet odio, fugiat libero sequi officiis a distinctio vel sit totam facilis, laboriosam quam sapiente ducimus
      possimus natus perferendis soluta.`
    }
  ]
  constructor() { }
}
