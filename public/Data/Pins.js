// create a function that will accept string as argurment and create a DP profile of user First name 
const DynamicUserProfile = (Str) => {
    return `
    <div class="ProfileContainer">
      <p class="dynamicUser">${Str}</p>
    </div>
  `;
};

var PinsData = [
    {
        id: '64aabf45f2ceb6e0001a9b01',
        ImgUri: 'https://i.pinimg.com/236x/0a/70/4e/0a704e0599d8a4006f371ecda574fe49.jpg',
        ImgHeight: '500px',
        CreatedBy: {
            userName: 'Sakura Tanaka',
            userProfile: DynamicUserProfile('ST'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 87,
        Comments: [
            {
                username: 'Ravi Patel',
                userMessage: 'Amazing photo!',
                userProfile: DynamicUserProfile('RP'),
            },
            {
                username: 'Lina Wong',
                userMessage: 'So beautiful!',
                userProfile: DynamicUserProfile('LW'),
            },
            {
                username: 'Jin Park',
                userMessage: 'I love this!',
                userProfile: DynamicUserProfile('JP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b02',
        ImgUri: 'https://i.pinimg.com/474x/9e/7e/38/9e7e38085fdbe875cd02e1eb09529398.jpg',
        ImgHeight: '450px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '5.3k',
        },
        NumOfLike: 53,
        Comments: [
            {
                username: 'Nina Chen',
                userMessage: 'Incredible shot!',
                userProfile: DynamicUserProfile('NC'),
            },
            {
                username: 'Raj Singh',
                userMessage: 'Great composition.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b03',
        ImgUri: 'https://i.pinimg.com/236x/33/2e/24/332e24b3d4a41a4897e6aab9440dbe36.jpg',
        ImgHeight: '310px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 32,
        Comments: [
            {
                username: 'Yuki Tanaka',
                userMessage: 'Love this scenery!',
                userProfile: DynamicUserProfile('YT'),
            },
            {
                username: 'Mei Zhang',
                userMessage: 'So relaxing.',
                userProfile: DynamicUserProfile('MZ'),
            },
            {
                username: 'Arjun Rao',
                userMessage: 'Very calming image.',
                userProfile: DynamicUserProfile('AR'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b04',
        ImgUri: 'https://i.pinimg.com/236x/72/27/cb/7227cb83589d0c190f57600557d3270b.jpg',
        ImgHeight: '300px',
        CreatedBy: {
            userName: 'Natsuki Suzuki',
            userProfile: DynamicUserProfile('NS'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 65,
        Comments: [
            {
                username: 'Hina Nakagawa',
                userMessage: 'Wonderful capture!',
                userProfile: DynamicUserProfile('HN'),
            },
            {
                username: 'Sandeep Kumar',
                userMessage: 'Fantastic details.',
                userProfile: DynamicUserProfile('SK'),
            },
            {
                username: 'Aki _Yoshida',
                userMessage: 'Really nice photo.',
                userProfile: DynamicUserProfile('AY'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b05',
        ImgUri: 'https://i.pinimg.com/236x/55/c0/15/55c0159d0b1ee2d623da5e7e97db1e28.jpg',
        ImgHeight: '490px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '200',
        },
        NumOfLike: 74,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Beautiful view!',
                userProfile: DynamicUserProfile('ST'),
            },
            {
                username: 'Ananya Rao',
                userMessage: 'Great perspective.',
                userProfile: DynamicUserProfile('AR'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b06',
        ImgUri: 'https://i.pinimg.com/236x/dd/38/05/dd380586a6ad845bf058260a4dd22385.jpg',
        ImgHeight: '350px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 21,
        Comments: [
            {
                username: 'Mina Kim',
                userMessage: 'Incredible capture!',
                userProfile: DynamicUserProfile('MK'),
            },
            {
                username: 'Ravi Singh',
                userMessage: 'Love the details.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b07',
        ImgUri: 'https://i.pinimg.com/236x/ce/65/0d/ce650d1c5b9a6f4ce0753f78dca37676.jpg',
        ImgHeight: '220px',
        CreatedBy: {
            userName: 'Sakura Tanaka',
            userProfile: DynamicUserProfile('ST'),
            NumberOfFollowers: '3k',
        },
        NumOfLike: 92,
        Comments: [
            {
                username: 'Akira Yamamoto',
                userMessage: 'Simply stunning!',
                userProfile: DynamicUserProfile('AY'),
            },
            {
                username: 'Sita Patel',
                userMessage: 'Beautifully captured.',
                userProfile: DynamicUserProfile('SP'),
            },
            {
                username: 'Kenji Mori',
                userMessage: 'Amazing view!',
                userProfile: DynamicUserProfile('KM'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b08',
        ImgUri: 'https://i.pinimg.com/236x/10/67/f9/1067f99e1b18c582dea5178b28f6c820.jpg',
        ImgHeight: '450px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '5.3k',
        },
        NumOfLike: 41,
        Comments: [
            {
                username: 'Yumi _Nishida',
                userMessage: 'Fantastic work!',
                userProfile: DynamicUserProfile('YN'),
            },
            {
                username: 'Amit Patel',
                userMessage: 'Love this image.',
                userProfile: DynamicUserProfile('AP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b09',
        ImgUri: 'https://i.pinimg.com/236x/38/9d/3a/389d3a8f37cfae9d136bfd98897e78d4.jpg',
        ImgHeight: '290px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 59,
        Comments: [
            {
                username: 'Mina Kim',
                userMessage: 'Incredible capture!',
                userProfile: DynamicUserProfile('MK'),
            },
            {
                username: 'Ravi Singh',
                userMessage: 'Amazing composition.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b0a',
        ImgUri: 'https://i.pinimg.com/236x/d5/44/60/d544600cac35418379a22170ec2e1f60.jpg',
        ImgHeight: '550px',
        CreatedBy: {
            userName: 'Natsuki Suzuki',
            userProfile: DynamicUserProfile('NZ'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 38,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Beautiful scenery!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'So calming.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b0b',
        ImgUri: 'https://i.pinimg.com/236x/da/8c/2e/da8c2ec1de7f938be0863b57e4451950.jpg',
        ImgHeight: '390px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 48,
        Comments: [
            {
                username: 'Kenji Mori',
                userMessage: 'Great shot!',
                userProfile: DynamicUserProfile('KM'),
            },
            {
                username: 'Ravi Patel',
                userMessage: 'Wonderful photo.',
                userProfile: DynamicUserProfile('RP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b0c',
        ImgUri: 'https://i.pinimg.com/236x/fa/c2/97/fac297b6a68484f72986a5d45711280b.jpg',
        ImgHeight: '220px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '3k',
        },
        NumOfLike: 77,
        Comments: [
            {
                username: 'Sita Patel',
                userMessage: 'Wonderful capture!',
                userProfile: DynamicUserProfile('SP'),
            },
            {
                username: 'Yumi _Nishida',
                userMessage: 'Amazing details.',
                userProfile: DynamicUserProfile('YN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b0d',
        ImgUri: 'https://i.pinimg.com/236x/9d/be/60/9dbe60e3990aab132948098cd8897cbb.jpg',
        ImgHeight: '290px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '4k',
        },
        NumOfLike: 56,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Fantastic capture!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'Beautiful photo.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b15',
        ImgUri: 'https://i.pinimg.com/236x/e2/3e/11/e23e11a1b8745cfab556373a3b12eebe.jpg',
        ImgHeight: '420px',
        CreatedBy: {
            userName: 'Sakura Tanaka',
            userProfile: DynamicUserProfile('ST'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 87,
        Comments: [
            {
                username: 'Ravi Patel',
                userMessage: 'Amazing photo!',
                userProfile: DynamicUserProfile('RP'),
            },
            {
                username: 'Lina Wong',
                userMessage: 'So beautiful!',
                userProfile: DynamicUserProfile('LW'),
            },
            {
                username: 'Jin Park',
                userMessage: 'I love this!',
                userProfile: DynamicUserProfile('JP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b16',
        ImgUri: 'https://i.pinimg.com/236x/e4/53/a1/e453a15cdef98b1949e0d805d5751923.jpg',
        ImgHeight: '550px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '5.3k',
        },
        NumOfLike: 53,
        Comments: [
            {
                username: 'Nina Chen',
                userMessage: 'Incredible shot!',
                userProfile: DynamicUserProfile('NC'),
            },
            {
                username: 'Rajish Singh',
                userMessage: 'Great composition.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1b17',
        ImgUri: 'https://i.pinimg.com/236x/81/43/4a/81434a96d0f53c7afeb166e14436201f.jpg',
        ImgHeight: '300px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 32,
        Comments: [
            {
                username: 'Yuki Tanaka',
                userMessage: 'Love this scenery!',
                userProfile: DynamicUserProfile('YT'),
            },
            {
                username: 'Mei Zhang',
                userMessage: 'So relaxing.',
                userProfile: DynamicUserProfile('MZ'),
            },
            {
                username: 'Arjun Rao',
                userMessage: 'Very calming image.',
                userProfile: DynamicUserProfile('AR'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c118',
        ImgUri: 'https://i.pinimg.com/236x/7e/71/49/7e71490edb9c18d4e18981ea40ea0e8d.jpg',
        ImgHeight: '310px',
        CreatedBy: {
            userName: 'Natsuki Suzuki',
            userProfile: DynamicUserProfile('NS'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 65,
        Comments: [
            {
                username: 'Hina Nakagawa',
                userMessage: 'Wonderful capture!',
                userProfile: DynamicUserProfile('HN'),
            },
            {
                username: 'Sandeep Kumar',
                userMessage: 'Fantastic details.',
                userProfile: DynamicUserProfile('SK'),
            },
            {
                username: 'Aki _Yoshida',
                userMessage: 'Really nice photo.',
                userProfile: DynamicUserProfile('AY'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1019',
        ImgUri: 'https://i.pinimg.com/474x/8d/a6/3a/8da63a399b8efaafa0679dce133f6447.jpg',
        ImgHeight: '390px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '200',
        },
        NumOfLike: 74,
        Comments: [
            {
                username: 'Jia Liab',
                userMessage: 'Beautiful view!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Ananya Rao',
                userMessage: 'Great perspective.',
                userProfile: DynamicUserProfile('AR'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1020',
        ImgUri: 'https://i.pinimg.com/236x/4f/b6/84/4fb684b4b55221ea84bb1c33d3fb9de4.jpg',
        ImgHeight: '550px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 21,
        Comments: [
            {
                username: 'Mina Kim',
                userMessage: 'Incredible capture!',
                userProfile: DynamicUserProfile('MK'),
            },
            {
                username: 'Ravi Singhasan',
                userMessage: 'Love the details.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1021',
        ImgUri: 'https://i.pinimg.com/236x/34/34/d8/3434d8f409a6ef45c0f0b0bbfe8b3ce0.jpg',
        ImgHeight: '320px',
        CreatedBy: {
            userName: 'Sakura Tanaka',
            userProfile: DynamicUserProfile('ST'),
            NumberOfFollowers: '3k',
        },
        NumOfLike: 92,
        Comments: [
            {
                username: 'Akira Yamamoto',
                userMessage: 'Simply stunning!',
                userProfile: DynamicUserProfile('AY'),
            },
            {
                username: 'Sita Patel',
                userMessage: 'Beautifully captured.',
                userProfile: DynamicUserProfile('SP'),
            },
            {
                username: 'Kenji Mori',
                userMessage: 'Amazing view!',
                userProfile: DynamicUserProfile('KM'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1021',
        ImgUri: 'https://i.pinimg.com/236x/50/79/db/5079db650a9728c27160a9f6218ac9a2.jpg',
        ImgHeight: '450px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '5.3k',
        },
        NumOfLike: 41,
        Comments: [
            {
                username: 'Yumi NADIA',
                userMessage: 'Fantastic work!',
                userProfile: DynamicUserProfile('YN'),
            },
            {
                username: 'Amit Patel',
                userMessage: 'Love this image.',
                userProfile: DynamicUserProfile('SP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1022',
        ImgUri: 'https://i.pinimg.com/236x/ef/7b/d0/ef7bd04eebdd10ff2be25692ce169f87.jpg',
        ImgHeight: '240px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 59,
        Comments: [
            {
                username: 'Mina Kim',
                userMessage: 'Incredible capture!',
                userProfile: DynamicUserProfile('MK'),
            },
            {
                username: 'Ravi Singh',
                userMessage: 'Amazing composition.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1023',
        ImgUri: 'https://i.pinimg.com/236x/d1/7c/92/d17c9232f934229ad7d1492367d04286.jpg',
        ImgHeight: '510px',
        CreatedBy: {
            userName: 'Natsuki Suzuki',
            userProfile: DynamicUserProfile('NS'),
            NumberOfFollowers: '1.2k',
        },
        NumOfLike: 38,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Beautiful scenery!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'So calming.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c10b024',
        ImgUri: 'https://i.pinimg.com/236x/e5/59/77/e5597730fc37e1d5e7479483a0199a73.jpg',
        ImgHeight: '390px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 48,
        Comments: [
            {
                username: 'Kenji Mori',
                userMessage: 'Great shot!',
                userProfile: DynamicUserProfile('KM'),
            },
            {
                username: 'Ravi Patel',
                userMessage: 'Wonderful photo.',
                userProfile: DynamicUserProfile('RP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1025',
        ImgUri: 'https://i.pinimg.com/236x/f1/3c/8d/f13c8dadc04559800272ab4276cfcc28.jpg',
        ImgHeight: '290px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '3k',
        },
        NumOfLike: 77,
        Comments: [
            {
                username: 'Sita Patel',
                userMessage: 'Wonderful capture!',
                userProfile: DynamicUserProfile('SP'),
            },
            {
                username: 'Yumi _Nishida',
                userMessage: 'Amazing details.',
                userProfile: DynamicUserProfile('YN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1026',
        ImgUri: 'https://i.pinimg.com/236x/34/bd/86/34bd86d32b2361f09105f713798a24ff.jpg',
        ImgHeight: '490px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '4k',
        },
        NumOfLike: 56,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Fantastic capture!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'Beautiful photo.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1027',
        ImgUri: 'https://i.pinimg.com/236x/a2/2c/ee/a22ceeedaf860e2c48d8400e64515a3c.jpg',
        ImgHeight: '320px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '1.8k',
        },
        NumOfLike: 63,
        Comments: [
            {
                username: 'Akira Yamamoto',
                userMessage: 'Very nice!',
                userProfile: DynamicUserProfile('AY'),
            },
            {
                username: 'Sakura Tanaka',
                userMessage: 'Great colors!',
                userProfile: DynamicUserProfile('ST'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1028',
        ImgUri: 'https://i.pinimg.com/236x/d1/5f/00/d15f004000a11771fb4be62b7081c5ce.jpg',
        ImgHeight: '480px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '5k',
        },
        NumOfLike: 45,
        Comments: [
            {
                username: 'Nina Chen',
                userMessage: 'Beautiful capture!',
                userProfile: DynamicUserProfile('NC'),
            },
            {
                username: 'Raj Singh',
                userMessage: 'I love the perspective.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1029',
        ImgUri: 'https://i.pinimg.com/236x/7c/65/c9/7c65c9c3d509b35d9b8381bc8d5bfcf1.jpg',
        ImgHeight: '260px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '3.5k',
        },
        NumOfLike: 67,
        Comments: [
            {
                username: 'Mina Kim',
                userMessage: 'Fantastic work!',
                userProfile: DynamicUserProfile('MK'),
            },
            {
                username: 'Ravi Singh',
                userMessage: 'Incredible photo.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1030',
        ImgUri: 'https://i.pinimg.com/236x/b1/d9/e1/b1d9e1a596154850c8e1379814efb06d.jpg',
        ImgHeight: '420px',
        CreatedBy: {
            userName: 'Kunal Mehta',
            userProfile: DynamicUserProfile('KM'),
            NumberOfFollowers: '2.4k',
        },
        NumOfLike: 55,
        Comments: [
            {
                username: 'Yuki Tanaka',
                userMessage: 'Wonderful colors!',
                userProfile: DynamicUserProfile('YT'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'Great capture.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1031',
        ImgUri: 'https://i.pinimg.com/236x/30/ad/04/30ad0478e14c689ac56871eea4d2ee68.jpg',
        ImgHeight: '250px',
        CreatedBy: {
            userName: 'Maya Patel',
            userProfile: DynamicUserProfile('MP'),
            NumberOfFollowers: '3k',
        },
        NumOfLike: 83,
        Comments: [
            {
                username: 'Kenji Mori',
                userMessage: 'Amazing photo!',
                userProfile: DynamicUserProfile('KM'),
            },
            {
                username: 'Ravi Patel',
                userMessage: 'Stunning capture.',
                userProfile: DynamicUserProfile('RP'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1032',
        ImgUri: 'https://i.pinimg.com/236x/ee/3e/4c/ee3e4c0c619248199d6cef77294db156.jpg',
        ImgHeight: '390px',
        CreatedBy: {
            userName: 'Amit Sharma',
            userProfile: DynamicUserProfile('AS'),
            NumberOfFollowers: '2k',
        },
        NumOfLike: 68,
        Comments: [
            {
                username: 'Jia Li',
                userMessage: 'Beautiful image!',
                userProfile: DynamicUserProfile('JL'),
            },
            {
                username: 'Hina Nakagawa',
                userMessage: 'So lovely.',
                userProfile: DynamicUserProfile('HN'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1033',
        ImgUri: 'https://i.pinimg.com/236x/3f/16/77/3f16771ec946807784d1227e974ed312.jpg',
        ImgHeight: '490px',
        CreatedBy: {
            userName: 'Natsuki Suzuki',
            userProfile: DynamicUserProfile('NS'),
            NumberOfFollowers: '1.8k',
        },
        NumOfLike: 72,
        Comments: [
            {
                username: 'Akira Yamamoto',
                userMessage: 'Amazing work!',
                userProfile: DynamicUserProfile('AY'),
            },
            {
                username: 'Sakura Tanaka',
                userMessage: 'Great details.',
                userProfile: DynamicUserProfile('ST'),
            },
        ],
    },
    {
        id: '64aabf45f2b6e0001a9c1034',
        ImgUri: 'https://i.pinimg.com/236x/6b/05/ea/6b05ea6b308a9b8754c81d9ee5508dd4.jpg',
        ImgHeight: '550px',
        CreatedBy: {
            userName: 'Sandeep Patel',
            userProfile: DynamicUserProfile('SP'),
            NumberOfFollowers: '2.5k',
        },
        NumOfLike: 50,
        Comments: [
            {
                username: 'Nina Chen',
                userMessage: 'Fantastic shot!',
                userProfile: DynamicUserProfile('NC'),
            },
            {
                username: 'Ravi Singh',
                userMessage: 'Love the colors.',
                userProfile: DynamicUserProfile('RS'),
            },
        ],
    },
]

module.exports = PinsData;


