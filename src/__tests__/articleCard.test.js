import { render } from '@testing-library/react';
import ArticleCard from 'components/articleCard';

test('Article Card renders successfully', () => {
  render(<ArticleCard article={mockData} />);
});

const mockData = {
  status: 'OK',
  copyright: 'Copyright (c) 2024 The New York Times Company.  All Rights Reserved.',
  num_results: 20,
  results: [
    {
      uri: 'nyt://article/ed0225e8-9d1f-5124-aaa7-519113855647',
      url: 'https://www.nytimes.com/2024/04/14/us/minneapolis-prosecutor-george-floyd-moriarty.html',
      id: 100000009395452,
      asset_id: 100000009395452,
      source: 'New York Times',
      published_date: '2024-04-14',
      updated: '2024-04-15 01:05:07',
      section: 'U.S.',
      subsection: '',
      nytdsection: 'u.s.',
      adx_keywords:
        'District Attorneys;Police Brutality, Misconduct and Shootings;Criminal Justice;Public Defenders and Court-Appointed Lawyers (Criminal);Content Type: Personal Profile;Black Lives Matter Movement;Moriarty, Mary F (1964- );Cobb, Ricky Thomas (1990-2023);Londregan, Ryan;Floyd, George (d 2020);Minneapolis (Minn)',
      column: null,
      byline: 'By Ernesto Londoño',
      type: 'Article',
      title: 'This Prosecutor Pledged to Change George Floyd’s City. Her Critics Are Circling.',
      abstract:
        'Mary Moriarty, a former chief public defender, became the top prosecutor in Minneapolis, promising an overhaul. Now she faces criticism, including from fellow Democrats.',
      des_facet: [
        'District Attorneys',
        'Police Brutality, Misconduct and Shootings',
        'Criminal Justice',
        'Public Defenders and Court-Appointed Lawyers (Criminal)',
        'Content Type: Personal Profile',
        'Black Lives Matter Movement'
      ],
      org_facet: [],
      per_facet: [
        'Moriarty, Mary F (1964- )',
        'Cobb, Ricky Thomas (1990-2023)',
        'Londregan, Ryan',
        'Floyd, George (d 2020)'
      ],
      geo_facet: ['Minneapolis (Minn)'],
      media: [
        {
          type: 'image',
          subtype: 'photo',
          caption: 'Mary Moriarty was elected Hennepin County attorney promising change.',
          copyright: 'Jenn Ackerman for The New York Times',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2024/04/11/multimedia/00nat-minneapolis-prosecutor-01-jkcq/00nat-minneapolis-prosecutor-01-jkcq-thumbStandard.jpg',
              format: 'Standard Thumbnail',
              height: 75,
              width: 75
            },
            {
              url: 'https://static01.nyt.com/images/2024/04/11/multimedia/00nat-minneapolis-prosecutor-01-jkcq/00nat-minneapolis-prosecutor-01-jkcq-mediumThreeByTwo210.jpg',
              format: 'mediumThreeByTwo210',
              height: 140,
              width: 210
            },
            {
              url: 'https://static01.nyt.com/images/2024/04/11/multimedia/00nat-minneapolis-prosecutor-01-jkcq/00nat-minneapolis-prosecutor-01-jkcq-mediumThreeByTwo440.jpg',
              format: 'mediumThreeByTwo440',
              height: 293,
              width: 440
            }
          ]
        }
      ],
      eta_id: 0
    },
    {
      uri: 'nyt://article/05a6815f-24de-5075-9c12-3db248ea4923',
      url: 'https://www.nytimes.com/2024/04/14/world/middleeast/iran-israel-drones-attack.html',
      id: 100000009413323,
      asset_id: 100000009413323,
      source: 'New York Times',
      published_date: '2024-04-14',
      updated: '2024-04-14 17:23:56',
      section: 'World',
      subsection: 'Middle East',
      nytdsection: 'world',
      adx_keywords:
        'Israel-Gaza War (2023- );Suleimani, Qassim;Defense Department;Iran;Israel;Gaza Strip',
      column: null,
      byline: 'By Matthew Mpoke Bigg',
      type: 'Article',
      title: 'What We Know About Iran’s Attack on Israel',
      abstract:
        'Tehran fired hundreds of drones and missiles in what was believed to be its first direct assault on Israel after years of a shadow war.',
      des_facet: ['Israel-Gaza War (2023- )'],
      org_facet: ['Defense Department'],
      per_facet: ['Suleimani, Qassim'],
      geo_facet: ['Iran', 'Israel', 'Gaza Strip'],
      media: [
        {
          type: 'image',
          subtype: 'photo',
          caption:
            'Explosions over Israel on Sunday. Iran’s attack was a retaliation for airstrikes on an Iranian Embassy building in Syria this month.',
          copyright: 'AFPTV',
          approved_for_syndication: 1,
          'media-metadata': [
            {
              url: 'https://static01.nyt.com/images/2024/04/14/multimedia/14mideast-whatweknow-cvbj/14mideast-whatweknow-cvbj-thumbStandard.jpg',
              format: 'Standard Thumbnail',
              height: 75,
              width: 75
            },
            {
              url: 'https://static01.nyt.com/images/2024/04/14/multimedia/14mideast-whatweknow-cvbj/14mideast-whatweknow-cvbj-mediumThreeByTwo210.jpg',
              format: 'mediumThreeByTwo210',
              height: 140,
              width: 210
            },
            {
              url: 'https://static01.nyt.com/images/2024/04/14/multimedia/14mideast-whatweknow-cvbj/14mideast-whatweknow-cvbj-mediumThreeByTwo440.jpg',
              format: 'mediumThreeByTwo440',
              height: 293,
              width: 440
            }
          ]
        }
      ],
      eta_id: 0
    }
  ]
};
