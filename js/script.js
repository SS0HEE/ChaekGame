/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'교실1': '교실1.jpg',
	'교실': '교실2.jpg',
	'교실2': '교실3.jpg',
	'복도1': '복도2.jpg',
	'복도': '복도1.jpg',
	'복도2': '복도1.jpg',
	'ㅍㅈ': 'ㅍㅈ.jpg',
	'ㅊ': 'ㅊ.jpg',
	'서서관': '도서관11.jpg',
	'서서관1': '도서관13.jpg',
	'서서관2': '도서관12.jpg',
	'서서관3': '도서관14.jpg',
	'동서관': '도서관21.jpg',
	'동서관2': '도서관22.jpg',
	'동서관1': '도서관23.jpg',
	'도서관': '도서관0.jpg',
	'도서관앞': '도서관앞.jpg',
	'장면1':'장면1.jpg'
});


// Define the Characters
monogatari.characters({
	'맵': {  // 조사맵을 띄울 때 표시하는 가상의 캐릭터
		name: ''
	},
	'책': {
		name: '',
		type_animation: false
	},
	'ㄱ': {
		name: '김고양',
		color: '#bb88ff',
		sprites: {
			ㅇ: 'ㄱ ㅇ.png',
			ㅎ: 'ㄱ ㅎ.png',
			ㅋ: 'ㄱ ㅋ.png',
			ㅠ: 'ㄱ ㅠ.png',
			ㅡ: 'ㄱ ㅡ.png',
		},
	},
	'ㅇ': {
		name: '이호랑',
		color: '#dddddd',
		sprites: {
			ㅇ: 'ㅇ ㅇ.png',
			ㅋ: 'ㅇ ㅋ.png',
			ㅠ: 'ㅇ ㅠ.png',
			ㅡ: 'ㅇ ㅡ.png',
		},
	},
	'ㅂ': {
		name: '박토끼',
		color: '#ff99cc',
		sprites: {
			ㅇ: 'ㅂ ㅇ.png',
			ㅋ: 'ㅂ ㅋ.png',
			ㅎ: 'ㅂ ㅎ.png',
			ㅠ: 'ㅂ ㅠ.png',
			ㅡ: 'ㅂ ㅡ.png',
			ㅂ: 'ㅂ ㅂ.png',
		},
	},
	'ㅊ': {
		name: '최 양',
		color: '#ddaa44',
		sprites: {
			ㅇ: 'ㅊ ㅇ.png',
			ㅋ: 'ㅊ ㅋ.png',
			ㅎ: 'ㅊ ㅎ.png',
			ㅠ: 'ㅊ ㅠ.png',
			ㅡ: 'ㅊ ㅡ.png',
		},
	},
	'ㅈ': {
		name: '정원숭',
		color: '#dd6666',
		sprites: {
			ㅇ: 'ㅈ ㅇ.png',
			ㅋ: 'ㅈ ㅋ.png',
			ㅎ: 'ㅈ ㅎ.png',
			ㅠ: 'ㅈ ㅠ.png',
			ㅡ: 'ㅈ ㅡ.png',
			ㅂ: 'ㅈ ㅂ.png',
			ㄴ: 'ㅈ ㄴ.png',
		},
	},
	'ㄴ': {
		name: '남 곰',
		color: '#e97451',
		sprites: {
			ㅇ: 'ㄴ ㅇ.png',
			ㅡ: 'ㄴ ㅡ.png',
		},
	},
	'ㄹ': {
		name: '류펭귄',
		color: '#44bbdd',
		sprites: {
			ㅇ: 'ㄹ ㅇ.png',
			ㅎ: 'ㄹ ㅎ.png',
			ㅠ: 'ㄹ ㅠ.png',
		},
	},
});



monogatari.script({

	/* ================================
	1일차 교실
	================================ */

	'Start': [
		'show background #ffffff with fadeIn',
		'centered 본 게임은 가로로 긴 화면에 최적화되어 있습니다.',
		'wait 1000',
		'show scene 교실1 with fadeIn',
		'wait 1000',
		'<span style="color:lightblue;"> 화면 속 친구들을 클릭해 말을 걸어보세요. </span>',
		'show scene 교실1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump 1-1',
					'Class': 't11',
				},
			}
		}
	],

	'1-1': [
		'show scene 교실 with fadeIn',
		'show character ㅈ ㅇ at left with fadeIn',
		'ㅈ …그러니까, 나는 지금이 한창 자랄 때라는 뜻이지.',
		'ㅈ 우리 형이 그러는데, 중학생 때 남자는 노력하면 일 년에 10cm는 클 수 있대.',
		'show character ㄱ ㅎ at right with fadeIn',
		'show character ㅈ ㄴ at left',
		'ㄱ 웃기시네. 너 작년에도 그 소리 했거든?            그런데 지금 봐, 아직도 나랑 비슷하잖아.',
		'show character ㅈ ㅠ at left',
		'ㅈ 윽, 그건 내가 작년에는 우유를 제대로 안 마셔서 그래. 올해는 매일매일 한 컵씩 마시고 있거든.',
		'show scene #ffffff with fadeIn',
		'wait 10',
		'show scene 교실 with fadeIn',
		'show character ㄱ ㅎ at right',
		'show character ㅈ ㅇ at left',
		'ㄱ ……오,            왔어? 일찍 등교했네?',
		'show character ㅈ ㅇ at left',
		'ㅈ 안녕! 저기,            그러니까….',
		'show character ㅈ ㅠ at left',
		'ㅈ ……            너 이름이 뭐였더라…?',
		{
			'Input': {
				'Text': '(성을 제외한) 이름을 입력해주세요.',
				'Validation': function(input) {
					return input.trim().length > 0;
				},
				'Save': function(input) {
					this.storage({
						이름: input
					});
					return true;
				},
				'Revert': function() {
					this.storage({
						이름: ''
					});
				},
				'Warning': '이름을 입력해야 합니다.'
			}
		},
		function() {
			const 이름 = monogatari.storage().이름;
			if (((이름.charCodeAt(이름.length - 1)) - 0xac00) % 28) {
				monogatari.storage({
					이: '이',
					아: '아'
				});
			}
		},
		'show character ㅈ ㅎ at left',
		'show character ㄱ ㅎ at right',
		'ㅈ ……            아! 기억났다. {{이름}}{{이}} 맞지?',
		{
			'Choice': {
				'1': {
					'Text': '맞아.',
					'Do': 'ㄱ 그보다 너도 들어봐.            얘가 자꾸 자기가 내년까지 10cm는 더 클 수 있다는 거 있지?'
				},
				'2': {
					'Text': '무슨 얘기 하고 있었어?',
					'Do': 'ㄱ 그게 말이야, 얘가 자꾸 자기가 내년까지 10cm는 더 클 수 있다는 거 있지?'
				},
			}
		},
		'show character ㅈ ㅂ at left',
		'show character ㄱ ㅋ at right',
		'ㅈ 클 수 있어!',
		'show character ㄱ ㅠ at right',
		'ㄱ 글쎄다….',
		'ㄱ 맞다, {{이름}}{{이}} 네가 전에 무슨 책에서 예상 키 계산하는 법을 본 적 있다고 하지 않았어?',
		{
			'Choice': {
				'1': {
					'Text': '아, 맞아.',
					'Do': 'ㄱ 그러니까… 우리 학급 문고에 있는 책이었지?'
				},
				'2': {
					'Text': '기억이 잘 안 나.',
					'Do': 'ㄱ 왜, 전에 우리 학급 문고에 있는 책 읽고 얘기해 줬었잖아.'
				},
			}
		},
		'show character ㅈ ㄴ at left',
		'ㅈ 예상 키…? 그런 걸 계산할 수가 있어?',
		'show character ㅈ ㅋ at left',
		'show character ㄱ ㅎ at right',
		'ㅈ 우유를 얼마나 많이 먹었는지, 운동을 얼마나 했는지 같은 걸로 키를 예상하는 거야? 나 완전 자신 있어!',
		'ㅈ 어떻게 계산하는 건데?',
		'ㄱ 음…. 나도 잘 기억이 안 나는데.',
		'ㄱ {{이름}}{{아}}, 그 책에서 그 부분 한 번만 더 읽어보고 와 줄래?',
		'show scene 교실1',
		'wait 1000',
		'<span style="color:lightblue;"> 학급 문고에 있는 책을 클릭해 보세요. </span>',
		'jump 1교실1',
	],

	'1교실1': [
		'show scene 교실1',
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage('ㅊ1') != 1) {
						return '1';
					}
					else {
						return '0';
					}
				},
				'0': '<span style="color:lightblue;">원하는 내용은 찾았나요? 책을 다시 읽을 수도 있고, 친구들에게 돌아가서 읽은 내용을 얘기해줄 수도 있습니다. </span>',
				'1': 'next'
			}
		},
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t11',
					'Class': 't11',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ1',
					'Class': 'ㅊ1',
				}
			}
		}
	],

	'ㅊ1': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ지금독립하는중입니다.jpg with fadeIn',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ지금독립하는중입니다.jpg with fadeOut',
		'wait 300',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p><p>이 시기를 전후해서 가장 큰 변화는 키가 크는 것이다. 자고 나면 쑥쑥 자라는 &apos;폭풍 성장기&apos;가 온다. 남자의 경우 14세나 15세, 즉 중 2, 3학년경에 가장 많이 자라고, 여자는 그보다 2년 정도 먼저 자라기 시작한다. 여자들은 먼저 자라는 만큼, 먼저 성장이 끝난다.</p>',
		'책 그러니 지금 중학생인 친구들은 같은 반 남자아이들이 키가 작더라도 함부로 놀리면 안 된다. 고등학생 때 다시 만나 보면 나는 그때 그대로인데, 그 친구들은 훌쩍 자라 있을 가능성이 높다.남자는 여자와 달리 청소년기 후기까지도 꾸준히 키가 크는 경향이 있다. 많이 자랄 때에는 1년에 10~12cm 정도까지 자란다. &apos;폭풍성장&apos;을 1년만 하느냐 2, 3년 계속 하느냐에 따라 키 차이가 나는 것이다.',
		'책 그렇다면 과연 내 키는 어디까지 자랄 수 있을까? 매일 줄넘기를 하고, 농구를 하고, 스트레칭을 하고, 우유를 열심히 마시면 180cm를 훌쩍 넘길 수 있을까? 그렇다고 말해 주고 싶지만, 의사의 양심상 그럴 수가 없다.',
		'책 안타깝지만 키는 부모의 유전적 영향에서 벗어나기 어렵다. 유전의 영향이 70% 정도는 된다는 것이 의학적으로 알려진 사실이다. 키가 큰 부모를 두면 키가 크고, 작은 부모를 두면 작다. (그렇다고 부모님을 너무 원망하지는 마시길!)',
		'책 최종 키가 얼마나 될지 궁금해할 친구들을 위해 힌트를 하나 주겠다. 내 최종 키의 예상치를 추정하는 방법이 있다. 아버지의 키와 어머니의 키를 더한 뒤 2로 나누어 평균값을 낸 다음에 남자는 6.5cm를 더하고, 여자는 6.5cm를 빼면 된다. 예를 들어 아버지가 180cm, 어머니가 160cm라면, 평균 170cm이므로 아들은 176.5cm정도, 딸은 163.5cm 정도를 기대할 수 있다.',
		'책 여기에 수면, 운동, 영양 상태 등이 30% 정도 영향을 미친다. 그러니 키를 키우고 싶으면 내가 갈 수 있는 평균치를 빨리 달성한 다음, 숨어 있는 30%를 극대화해서 최대한 커질 수 있도록 하는 것이 현실적이다. <p style="font-size:0.8em; color:darkgrey; text-align: right;"> 하지현, 『지금 독립하는 중입니다』, 창비, 2017, 18~21쪽.</p>',
		function() { monogatari.storage().ㅊ1 += 1 },
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ1 == true
				},
				'True': 'jump 1교실1',
				'False': 'jump 1교실2'
			}
		}
	],

	't11': [
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅊ1 > 0) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'jump 1-2',
				'0': 'jump t11-1',
			}
		}
	],

	't11-1': [
		'show scene 교실 with fadeIn',
		'show character ㄱ ㅇ with fadeIn',
		'ㄱ 우리 반 학급 문고는 사물함 위에 있잖아. 잊은 건 아니지?',
		'jump 1교실1',
	],

	'1-2': [
		'show scene 교실',
		'show character ㅈ ㅇ at left',
		'show character ㄱ ㅇ at right',
		'ㅈ {{이름}}{{아}}, 그 책 찾았어?',
		'ㅈ 키에 가장 많은 영향을 주는 게 뭐래?',
		{
			'Choice': {
				'1': {
					'Text': '유전',
					'Do': 'jump 1-3'
				},
				'2': {
					'Text': '수면과 운동',
					'Do': 'jump 1-2-2',
				},
				'3': {
					'Text': '영양 상태',
					'Do': 'jump 1-2-3',
				},
				'4': {
					'Text': '절실한 마음',
					'Do': 'jump 1-2-4',
				},
			}
		},
	],

	'1-2-1': [
		'show character ㅈ ㅇ at left',
		'ㅈ 농담하지 말고 제대로 알려줘! <b>키에 가장 많은 영향을 주는 게 뭐래?</b>',
		{
			'Choice': {
				'1': {
					'Text': '유전',
					'Do': 'jump 1-3'
				},
				'2': {
					'Text': '수면과 운동',
					'Do': 'jump 1-2-2',
					'Clickable': function() {
						return monogatari.storage().ㅅ012
					},
				},
				'3': {
					'Text': '영양 상태',
					'Do': 'jump 1-2-3',
					'Clickable': function() {
						return monogatari.storage().ㅅ013
					},
				},
				'4': {
					'Text': '절실한 마음',
					'Do': 'jump 1-2-4',
					'Clickable': function() {
						return monogatari.storage().ㅅ014
					},
				},
			}
		},
	],

	'1-2-2': [
		'show character ㅈ ㅋ at left',
		'ㅈ 정말? 나 요즘 하루에 아홉 시간은 자고 있어!',
		'show character ㄱ ㅠ at right',
		'ㄱ 얘 놀리지 말자, {{이름}}{{아}}. 그런 내용 아니었잖아….',
		function() { monogatari.storage().ㅅ012 = false; },
		'jump 1-2-1'
	],
	'1-2-3': [
		'show character ㅈ ㅋ at left',
		'ㅈ 정말? 나 삼시세끼랑 간식 전부 꼬박꼬박 챙겨먹고 있어!',
		'ㅈ 우유도 하루 한 잔씩은 마신다고.',
		'show character ㄱ ㅠ at right',
		'ㄱ 얘 놀리지 마, {{이름}}{{아}}. 그런 내용 아니지 않아…?',
		function() { monogatari.storage().ㅅ013 = false; },
		'jump 1-2-1'
	],
	'1-2-4': [
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㄱ ㅡ at right',
		'ㄱ ……',
		'show character ㅈ ㅇ at left',
		'ㅈ 미안….           나 그런 걸 믿을 나이는 아니라서….',
		function() { monogatari.storage().ㅅ014 = false; },
		'jump 1-2-1'
	],
	'1-3': [
		'show character ㅈ ㄴ at left',
		'ㅈ ……            ……            !',
		'ㅈ 유전의 영향이 70%나 된다고……?',
		'ㄱ 이 공식을 바탕으로 예상 키를 계산해봐. 어, 그러니까…….',
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㅈ ㅇ at left',
		'ㅈ 그러니까……            거기에 6.5cm를 더하면……            말도 안 돼!',
		'show character ㅈ ㅠ at left',
		'ㅈ 그…          그럴 리가 없어.           내 키가….           <b>내 키가 고작……!</b>',
		'show character ㄱ ㅎ at right',
		'ㄱ 오, 벌써 계산했어? 너 의외로 암산이 빠르구나?',
		{
			'Choice': {
				'1': {
					'Text': '굉장하다!',
					'Do': 'jump 1-4'
				},
				'2': {
					'Text': '내 예상 키도 계산해줘.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㅇ at left',
		'show character ㄱ ㅇ at right',
		'ㅈ 어? 응, 알겠어…….           그러니까… 성별에 따라 계산 방법이 다르댔지?',
		{
			'Choice': {
				'1': {
					'Text': '나는 남자야.',
					'Do': function() { monogatari.storage().성별 = 6.5; }
				},
				'2': {
					'Text': '나는 여자야.',
					'Do': function() { monogatari.storage().성별 = -6.5; }
				},
				'3': {
					'Text': '그냥 내가 알아서 계산할게.',
					'Do': 'jump 1-4'
				},
			}
		},
		'ㅈ 앗, 그 전에… 계산하려면 부모님 키를 알아야 한댔지? 너희 아버지랑 어머니 키 다 알고 있어?',
		{
			'Choice': {
				'1': {
					'Text': '당연하지!',
					'Do': 'jump 1-3-1'
				},
				'2': {
					'Text': '모르는데….',
					'Do': 'next'
				},
			}
		},
		'ㅈ 그럼 못 계산하지….',
		'jump 1-4',
	],
	'1-3-1': [
		'ㅈ 너희 아버지 키가 몇 cm신데?',
		{
			'Input': {
				'Text': '우리 아버지 키는…',
				'Type': 'number',
				'Validation': (input) => {
					return input.trim() < 220 && input.trim() > 120;
				},
				'Save': (input) => {
					monogatari.storage({ '아빠키': parseInt(input) });
				},
				'Warning': '단위는 cm입니다.'
			}
		},
		'ㅈ 너희 어머니 키는?',
		{
			'Input': {
				'Text': '우리 어머니 키는…',
				'Validation': (input) => {
					return input.trim() < 220 && input.trim() > 120;
				},
				'Save': (input) => {
					monogatari.storage({ '엄마키': parseInt(input) });
				},
				'Warning': '단위는 cm입니다.'
			}
		},
		'ㅈ 으음, 그러니까…',
		function() {
			monogatari.storage().예상키 = (monogatari.storage('엄마키') + monogatari.storage('아빠키')) / 2 + monogatari.storage('성별');
		},
		'ㅈ 네 예상 키는 {{예상키}}cm야.',
		{
			'Choice': {
				'1': {
					'Text': '그렇구나.',
					'Do': 'next'
				},
				'2': {
					'Text': '말도 안 돼!',
					'Do': 'ㅈ 그래도 같은 처지인 친구가 있어서 기쁘네….'
				},
			}
		},
		'jump 1-4'
	],
	'1-4': [
		'show character ㅈ ㅡ at left',
		'ㅈ ……',
		'show character ㅈ ㅠ at left',
		'ㅈ 하아아아아아아아아아아…. 내 키가 고작……. ',
		'show character ㄱ ㅎ at right',
		'ㄱ 너무 상심하지 마, 원숭아. 이제 와서 다시 태어날 수도 없는 일이잖아. 그냥 받아들여.',
		'ㅈ 하아아아…. 매일매일 싫어하는 멸치도 먹고 우유도 마시고… 그렇게 싫어하는 운동도 하고… 지금껏 갖은 노력을 다 해 왔는데.',
		'ㅈ 지금까지의 내 노력은…           전부 의미 없었던 걸까?',
		{
			'Choice': {
				'1': {
					'Text': '그렇지 않아!',
					'Do': 'next'
				},
				'2': {
					'Text': '나머지 30%가 있잖아.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㅡ at left',
		'ㅈ …….           !',
		'ㅈ 숨어 있는 30%를 극대화하라고…?',
		'ㅈ 하지만 고작 30%인 걸….',
		'show character ㄱ ㅇ at right',
		'ㄱ 응? 근데 30%도 그렇게 작은 건 아닐지도 몰라. 비록 네가 예상 키는 <b>아주아주 처참한</b> 편이지만….',
		'ㄱ 그래도 지금의 너는, 친구들에 비하면 그렇게 막 작은 편은 아닌 것 같은데?',
		'show character ㄱ ㅎ at right',
		'ㄱ 네 노력이 이미 어느 정도 성과를 보였다는 거지.',
		{
			'Choice': {
				'1': {
					'Text': '맞아!',
					'Do': 'next'
				},
				'2': {
					'Text': '듣고 보니 그렇네.',
					'Do': 'next'
				},
			}
		},
		'show character ㅈ ㄴ at left',
		'ㅈ ……',
		'ㅈ 그렇구나……. 30%는 나름 큰 숫자였구나…!',
		'show character ㅈ ㅎ at left',
		'ㅈ 고마워, 얘들아! 나 앞으로 더 노력할게.',
		'ㅈ 정말정말 고마워, {{이름}}{{아}}! 덕분에 의지가 생겼어!',
		'show character ㅈ ㅂ at left',
		'ㅈ 좋아, 오늘부터 줄넘기 양을 두 배로 늘려야지. 언젠가 190cm를 찍는 게 목표야!',
		'hide character ㅈ with fadeOut',
		'show character ㄱ ㅡ at right',
		'ㄱ ……',
		'show character ㄱ ㅠ with fadeIn',
		'ㄱ 잘된 일이긴 하지만, 190cm는 현실적으로 좀 어렵지 않을까……?',
		'hide character ㄱ with fadeOut',
		'wait 1000',
		function() { monogatari.storage().ㅋ1 = false },
		'<span style="color:lightblue;"> 잘 하셨습니다! </span>',
		'<span style="color:lightblue;"> 교실 밖에도 어려운 문제를 만났거나 고민을 가지고 있는 친구들이 있을 겁니다. 이런 식으로 그 친구들을 도울 수 있지 않을까요?</span>',
		'<span style="color:lightblue;"> 화살표를 눌러서 복도로 나가 봅시다.</span>',
		'jump 1교실2',
	],

	'1교실2': [
		'show scene 교실2',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t11-2',
					'Class': 't11-2',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ1',
					'Class': 'ㅊ1',
				},
				'm교실1': {
					'Text': '',
					'Do': 'jump 2-1',
					'Class': 'm교실1',
				}
			}
		}
	],

	't11-2': [
		'show scene 교실 with fadeIn',
		'show character ㄱ ㅇ with fadeIn',
		'ㄱ 그러고 보니 아까 토끼가 너를 찾는 것 같던데?',
		'ㄱ 지금은 안 보이네…. 복도에 있으려나?',
		'hide character ㄱ ㅇ with fadeOut',
		'jump 1교실2',
	],

	/* 1일차 복도 */

	'1복도1': [
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ2 == false
				},
				'True': 'next',
				'False': 'jump 2-1',
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ3 == true
				},
				'True': 'next',
				'False': 'jump 1복도2'
			}
		},
		'show scene 복도1 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't12': {
					'Text': '',
					'Do': 'jump t12',
					'Class': 't12'
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ2',
					'Class': 'ㅊ2',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ3',
					'Class': 'ㅊ3',
				}
			}
		}
	],

	'2-1': [
		'show scene 복도 with fadeIn',
		'wait 500',
		'show character ㅂ ㅎ with fadeIn',
		'ㅂ 앗, {{이름}}{{아}}! 한참 찾았잖아!',
		{
			'Choice': {
				'1': {
					'Text': '나를?',
					'Do': 'ㅂ 응! 다른 게 아니라….'
				},
				'2': {
					'Text': '무슨 일이야?',
					'Do': 'ㅂ 그게, 다름이 아니라….'
				},
			}
		},
		'show character ㅂ ㅇ',
		'ㅂ 너 학교 도서관 자주 가지?',
		{
			'Choice': {
				'1': {
					'Text': '그런 편이지.',
					'Do': 'jump 2-1-1'
				},
				'2': {
					'Text': '가끔 가긴 해.',
					'Do': 'jump 2-1-2'
				},
				'3': {
					'Text': '아니. 가 본 적 없는데….',
					'Do': 'jump 2-1-3'
				},
			}
		},
	],

	'2-1-1': [
		'show character ㅂ ㅋ',
		'ㅂ 역시! 너만 믿고 있었어!',
		function() { monogatari.storage().도서관빈도 = 2 },
		function() { monogatari.storage().도서관가 = true },
		'show character ㅂ ㅇ',
		'ㅂ 있잖아, 다른 게 아니고….',
		'show character ㅂ ㅎ',
		'ㅂ 나랑 같이 도서관 좀 가 주라!',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-1-2': [
		'show character ㅂ ㅋ',
		'ㅂ 가 봤다는 것만으로도 대단해!',
		function() { monogatari.storage().도서관빈도 = 1 },
		function() { monogatari.storage().도서관가 = true },
		'ㅂ 있잖아, 그럼….',
		'ㅂ 나랑 같이 도서관 좀 가 줄 수 있어?',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-1-3': [
		'show character ㅂ ㅠ',
		'ㅂ 저,           정말?',
		function() { monogatari.storage().도서관빈도 = 0 },
		function() { monogatari.storage().도서관안가 = true },
		'show character ㅂ ㅡ',
		'ㅂ ……             ……',
		'show character ㅂ ㅇ',
		'ㅂ 그, 그럼 있잖아….',
		'show character ㅂ ㅎ',
		'ㅂ 이 기회에 나랑 같이 처음으로 도서관 가기를 시도해보지 않을래?',
		{
			'Choice': {
				'1': {
					'Text': '웬 도서관?',
					'Do': 'ㅂ 그게, 실은 내가 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				},
				'2': {
					'Text': '&apos;같이&apos;…?',
					'Do': 'ㅂ 응…! 실은 내가, 이번 사회 수행평가에서 설문 조사를 맡기로 해서….'
				}
			}
		},
		'jump 2-2'
	],

	'2-2': [
		'show character ㅂ ㅇ',
		'ㅂ <b>&apos;우리 학교 친구들이 책을 읽는 이유&apos;</b>에 대해 조사해야 하거든?          그런데 요즘 학교에서 책 읽는 애들이 얼마나 있겠어?',
		'show character ㅂ ㅠ',
		'ㅂ 그래서 여지껏 아무 답변도 못 얻었다고 했더니, 선생님께서 그럼 학교 도서관에 가보라고 하시는 거야.',
		'ㅂ 거긴 책 읽는 애들만 있을 거 아니냐면서….',
		{
			'Choice': {
				'1': {
					'Text': '현명하시네.',
					'Do': 'ㅂ ……           근데, 문제가 있는데….'
				},
				'2': {
					'Text': '그럼 그냥 혼자 도서관에 가면 되잖아?',
					'Do': 'ㅂ ……           그게, 내가 실은…..'
				}
			}
		},
		'show character ㅂ ㅡ',
		'ㅂ ……',
		'vibrate 200',
		'show character ㅂ ㅂ',
		'ㅂ <span style="font-size:1.2em !important"><b> 나 사실 우리 학교 도서관 한 번도 가본 적 없단 말야…! </b></span>',
		'ㅂ <b>애들이 막,      평소엔 책 한 글자도 안 보는 애가 도서관을 다 왔다고 눈치 주면 어떡해?           내 발소리가 너무 커서 사서 선생님한테 쫓겨나게 되면 어떡하지?!<b>',
		'ㅂ <b>아니면, 들어가려면 무슨 자격 요건 같은 게 있는데 나만 몰랐던 거면…? 그래서 쪽 당하면 어떡해?!           너무너무너무 두렵단 말야!<b>',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄까?',
					'Do': 'jump 2-3'
				},
				'2': {
					'Text': '도서관은 그렇게 살벌한 곳이 아니야….',
					'Do': 'jump 2-2-2',
					'Condition': function() {
						return monogatari.storage('도서관가');
					}
				},
				'3': {
					'Text': '도서관이 그렇게 살벌한 곳이었어…?',
					'Do': 'jump 2-2-3',
					'Condition': function() {
						return monogatari.storage('도서관안가');
					}
				}
			}
		},
	],
	'2-2-2': [
		'show character ㅂ ㅠ',
		'ㅂ 그렇다고 해도, 가본 적 없는 곳을 혼자서 가는 건 너무너무 무서운 일이야….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄게.',
					'Do': 'jump 2-3'
				}
			}
		}
	],
	'2-2-3': [
		'show character ㅂ ㅠ',
		'ㅂ 설령 아니라 해도, 가본 적 없는 곳을 혼자서 가는 건 너무너무 무서운 일이야….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 내가 같이 가 줄게.',
					'Do': 'jump 2-3'
				}
			}
		}
	],

	'2-3': [
		'show character ㅂ ㅇ',
		'ㅂ 정말로……?',
		'show character ㅂ ㅋ',
		'ㅂ 진짜 고마워!! {{이름}}{{이}} 네 덕분에 살았어!',
		'show character ㅂ ㅎ',
		'ㅂ 혹시 오늘 점심 시간에 시간 괜찮아? 그때 도서관 앞에서 만나자!',
		'show character ㅂ ㅋ',
		'ㅂ 기다리고 있을게! {{이름}}{{아}}, 진짜진짜 고마워!!',
		function() { monogatari.storage().ㅋ2 = false },
		'hide character ㅂ with FadeOut',
		'wait 500',
		'jump 1복도1'
	],

	't12': [
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅊ2 > 0) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'next',
				'0': 'jump 3-1',
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅁ4 == true) {
						return '1';
					} else {
						return '0';
					}
				},
				'1': 'jump 3-1',
				'0': 'jump 3-2',
			}
		}
	],

	'3-1': [
		'show scene 복도 with fadeIn',
		'show character ㅊ ㅡ with fadeIn',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 새들은 무슨 생각을 할까?',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 어쩌면 새랑은 친구가 될 수도 있지 않을까? 앵무새는 말도 할 수 있으니까….',
		function() { monogatari.storage().ㅁ4 = false },
		'jump 1복도1',
	],

	'ㅊ2': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ과학자가되는시간.jpeg',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ과학자가되는시간.jpeg',
		'wait 300',
		'책 <p style="text-align:center; font-weight:bold;"> 새도 생각할까?</p><b>아이린 페퍼버그</b>(Irene Pepperberg)는  4살 때 아버지에게 앵무새 한 마리를 선물로 받았습니다. 평생 새를 사랑하게 된 시작점이었죠.',
		'책 아이린은 어린 시절 동화 『닥터 두리틀』을 읽고 큰 감동을 받았다고 해요. 주인공 두리틀 박사는 인간보다 동물을 치료하는 걸 좋아하는 인물이에요. 아이린은 또래 아이들과 어울리기보다는 앵무새와 더 가깝게 지냈던 내성적인 소녀였기에 큰 울림을 받았죠. 아이린은 앵무새에게 말하는 법을 가르쳤고 자신을 따라 하게 했어요.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 아이린은 원래 화학을 전공하려고 했지만, 새를 너무 좋아하다 보니 동물의 인지 능력을 연구하는 학문인 동물인지학에 빠지게 되었습니다. 비인간 동물들이 생각을 할 수 있는지에 관해서는 과학자마다 의견이 다르답니다. 일부 과학자는 오직 인간만이 복잡한 사고를 할 수 있다고 생각해요. 반면에 침팬지와 돌고래처럼 지능이 높다고 알려진 일부 동물들 또한 생각할 수 있다고 여기는 과학자들도 있지요. 한편 새가 복잡한 사고를 할 수 있다고 믿는 과학자는 매우 드물었습니다.',
		'책 1977년, 아이린은 새가 생각을 할 수 있는지 알아보기 위해 아프리카 회색앵무를 한 마리 샀습니다. 이름은 알렉스라고 지었지요. 알렉스는 50가지 물체를 식별하고 150개 단어를 말할 수 있었어요. 물론 많은 앵무새가 &#39;말&#39;을 할 수 있습니다. 하지만 그저 인간의 목소리를 흉내 낼 뿐이고 그 뜻을 이해하지는 못하지요.',
		'책 그러나 알렉스는 달랐어요. 크고 작은 것, 같은 것과 다른 것에 대한 개념을 이해하는 듯 보였죠. 알렉스에게 쟁반 위에 빨간 블록이 몇 개나 있는지 물어보면 알렉스는 그 쟁반에 다른 색깔과 모양의 물체가 있더라도 정확하게 대답했습니다. 알렉스는 “미안해.” “견과류 먹고 싶어." "(새장으로) 돌아갈래." 같은 말로 욕구를 표현할 줄도 알았습니다.',
		'책 알렉스가 단지 &#39;발성&#39;한 것인지 아니면 뜻을 알고 말한 것인지에 대해서는 아직도 과학자들의 의견이 분분합니다. 하지만 어느 쪽이든 알렉스는 우리가 새를 좀 더 이해할 수 있게 해 줬어요. 알렉스는 31살, 아직 이른 나이에 세상을 떠날 때(아프리카 회색앵무는 감금 상태로 60년까지 살 수 있어요.) 아이린에게 마지막으로 이렇게 말했습니다. “잘 지내, 사랑해."<p style="font-size:0.8em; color:darkgrey; text-align: right;"> 템플 그랜딘 저, 이민희 역, 『과학자가 되는 시간』, 창비, 2022, 116~118쪽. </p>',
		function() { monogatari.storage().ㅊ2 += 1 },
		'jump 1복도1'
	],

	'ㅊ3': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ유튜브에빠진너에게.jpeg',
		'centered ',
		'hide image ㅊ유튜브에빠진너에게.jpeg',
		'show background ㅊ with fadeIn',
		'wait 300',
		'책 <p style="text-align:center; font-weight:bold;"> 정보 편식을 유도하는 알고리즘</p><br>여러분은 자라면서 &quot;골고루 먹어야 건강해진다&quot;는 말을 귀에 못이 박히도록 들었을 거예요. 왜 내가 좋아하는 음식만 골라 먹으면 안 될까요? 여러 종류의 영양소를 고루 섭취하지 않으면 몸에 이상이 나타날 수 있기 때문입니다. 정보도 마찬가지입니다. 내 입맛에 맞는 정보만 쏙쏙 골라 받아들이면 사고의 균형이 깨지고, 편견을 가진 채로 세상을 이해하게 됩니다.',
		'책 유튜브는 어떻게 정보 편식을 유도할까요? 답은 알고리즘에 있습니다. 알고리즘은 이용자들의 조회 수와 이용 시간을 늘리는 방식으로 설계되었어요. 그래야 유튜브의 기업 가치가 높아지고, 수익도 증가하기 때문입니다. 이를 위한 가장 좋은 방법은 이용자의 시청 기록을 분석하여 이와 유사하거나, 관심 있어 할 만한 정보만을 계속 추천해 주는 겁니다.',
		'책 2018년 영국 언론 &lt;가디언&gt;은 유튜브에서 3년 동안 추천 시스템을 다룬 엔지니어 기욤 샤슬로Guillaume Chaslot의 인터뷰를 실었는데요. 내용이 매우 의미심장합니다. 그는 &quot;유튜브의 추천 알고리즘은 이용자가 머무는 시간을 늘리는 게 목적이어서 필터 버블과 가짜 뉴스를 만들어 낸다. 유튜브 동영상의 품질과 다양성 개선을 위한 알고리즘 수정 방안을 제시했지만 채택되지 않았다.&quot;라고 말했습니다.',
		'책 &#39;필터 버블(filter bubble)&#39;이란 비눗방울처럼 생각이 그 안에 갇혀서 벗어나지 못하는 현상을 의미합니다. 유튜브가 이용자의 견해와 일치하는 콘텐츠만을 계속 보여 준다면 해당 이용자의 생각은 더 굳어지게 되겠지요. 유튜브 영상이 소셜 미디어를 통해 비슷한성향의 사람들에게 공유되면, 나의 생각은 더욱 힘을 얻게 됩니다. 유사한 의견을 가진 사람들 위주로 소통하다 보니 내 생각이 옳다고 점점 더 확신하게 되는 거예요.',
		'책 알고리즘은 이처럼 이용자의 균형 잡힌 사고를 방해할 수 있습니다. 유튜브를 시청하는 수많은 사람들은 알고리즘의 지배에서 자유롭지 못합니다. 물론 알고리즘 때문이 아니어도 자신의 성향에 맞는 유튜브 채널을 구독해 스스로 편향된 사고를 강화하는 경우도 있지요. 정보 편식은 사람들 간 분열을 조장하고, 건강하지 못한 개인과 사회를 만듭니다. 따라서 1인 미디어의 맞춤형 알고리즘에 지나치게 의존하면 위험하다는 것을 깨달아야 합니다.',
		'책 자신이 좋아하는 콘텐츠를 즐기는 게 문제는 아닙니다. 관심 있는 주제에 대해서 깊이 있게 공부하는 기회가 될 수도 있지요. 다만 가치관을 형성하는 과정에서 알고리즘의 추천에만 의지한다면, 사고가 한쪽으로 기울 수 있다는 사실을 인지해야 합니다. 유튜브를 볼 때도, 일상생활에서도 다양한 사람들의 의견을 듣는 열린 태도가 필요합니다.<p style="font-size:0.8em; color:darkgrey; text-align: right;"> 구본권, 『유튜브에 빠진 너에게』 , 북트리거, 2020, 74~76쪽.</p>',
		'jump 1복도1',
	],

	'3-2': [
		'show scene 복도 with fadeIn',
		'show character ㅊ ㅡ with fadeIn',
		'ㅊ ……           !',
		'show character ㅊ ㅇ',
		'ㅊ 뭐야,           {{이름}}{{이}}였구나….',
		'ㅊ 무슨 일이야…?',
		{
			'Choice': {
				'1': {
					'Text': '앵무새가 뜻을 알아서 인간의 말을 하는 건 아니래.',
					'Do': function() { monogatari.storage().앵무긍정 = true }
				},
				'2': {
					'Text': '앵무새도 생각을 할 수 있을지도 모른대.',
					'Do': function() { monogatari.storage().앵무긍정 = false }
				},
				'3': {
					'Text': '아프리카 회색앵무는 감금 상태로 60년까지 살 수 있대.',
					'Do': 'jump 3-2-1',
				},
			}
		},
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().앵무긍정 == true
				},
				'True': function() { monogatari.storage().긍정 += 1 },
				'False': function() { monogatari.storage().긍정 -= 1 },
			}
		},
		'jump 3-3'
	],

	'3-2-1': [
		'show character ㅊ ㅡ',
		'ㅊ …….           ?',
		'show character ㅊ ㅇ',
		'ㅊ 아프리카……           뭐라고?',
		{
			'Choice': {
				'1': {
					'Text': '미안. 말이 헛나왔어.',
					'Do': 'next'
				},
			}
		},
		'ㅊ 아…….          나도 가끔 그럴 때 있어. 괜찮아….',
		'ㅊ ……그래서, 원래 무슨 말을 하려고 했었어?',
		{
			'Choice': {
				'1': {
					'Text': '앵무새가 뜻을 알아서 인간의 말을 하는 건 아니래.',
					'Do': function() { monogatari.storage().긍정 -= 1 }
				},
				'2': {
					'Text': '앵무새도 생각을 할 수 있을지도 모른대.',
					'Do': function() { monogatari.storage().긍정 += 1 }
				},
				'3': {
					'Text': '아프리카 회색앵무는 감금 상태로 60년까지 살 수 있대.',
					'Clickable': function() {
						return monogatari.storage().false
					},
					'Do': 'end',
				},
			}
		},
		'jump 3-3'
	],

	'3-3': [
		'show character ㅊ ㅡ',
		'ㅊ ……           ……           ?',
		'show character ㅊ ㅇ',
		'ㅊ 갑자기 웬 앵무새…?',
		{
			'Choice': {
				'1': {
					'Text': '저기에 앵무새 얘기가 나오는 책이 있길래.',
					'Do': 'next'
				},
				'2': {
					'Text': '네가 궁금해할 것 같아서.',
					'Do': 'jump 3-3-1'
				},
			}
		},
		function() { monogatari.storage().독서언급 += 1 },
		'ㅊ 책……?',
		'jump 3-3-2'
	],

	'3-3-1': [
		function() { monogatari.storage().다정 += 1 },
		'show character ㅊ ㅡ',
		'ㅊ …… ?',
		'show character ㅊ ㅇ',
		'ㅊ 마침 그런 게 궁금하던 참이긴 했는데……. 어떻게 알았어?',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().앵무긍정 == true
				},
				'True': 'ㅊ 근데 좀 신기하다……. 책 속에는 똑똑한 앵무새들이 많이 나오잖아. 난 지금껏… 아마 소설적 허용일 거라고 생각해왔는데…….',
				'False': 'ㅊ 근데 좀 아쉽다……. 책 속에는 똑똑한 앵무새들이 많이 나오잖아. ……소설적 허용일 거라고는 예상했지만.'
			}
		},
		'show character ㅊ ㅡ',
		'ㅊ …….',
		'show character ㅊ ㅎ',
		'ㅊ …고마워. {{이름}}{{이}} 넌 아는 게 되게 많은 것 같아….',
		{
			'Choice': {
				'1': {
					'Text': '이건 저기 있는 책에 나와 있었던 내용이야.',
					'Do': 'jump 3-3-2'
				},
				'2': {
					'Text': '너도 책을 많이 읽으니까 이런 걸 잘 알 줄 알았는데.',
					'Do': 'next'
				},
			}
		},
		'show character ㅊ ㅋ',
		'ㅊ 좀 부끄럽네……. 난 그렇게 책을 잘 읽는 건 아니야.',
		'show character ㅊ ㅇ',
		'ㅊ 문학이 아닌 책들은…             나한테 너무 어려운 것 같아. &#39;지식책&#39;이랄까, &#39;정보책&#39;이랄까…….',
		'jump 3-4'
	],

	'3-3-2': [
		'show character ㅊ ㅇ',
		'ㅊ 아, 표지에 동물 발자국이나 나뭇잎이나… 그런 게 그려져 있었던 책을 말하는 거야? 복도 서가에서 본 적 있어…….',
		'show character ㅊ ㅠ',
		'ㅊ 소설인 줄 알고 집어들었는데… 그런데 동식물에 관한 책이더라……. 그래서 읽지는 않았지만.',
		{
			'Choice': {
				'1': {
					'Text': '소설이 아닌 책은 별로야?',
					'Do': 'next'
				},
				'2': {
					'Text': '과학에 관련된 책은 별로야?',
					'Do': 'next'
				},
			}
		},
		'show character ㅊ ㅇ',
		'ㅊ 으응……. 정확히는 문학이 아닌 책들이… 나한테는 너무 어려워. 뭐라고 부르더라…? &#39;지식책&#39;이랄까, &#39;정보책&#39;이랄까…….',
		'jump 3-4'
	],

	'3-4': [
		'show character ㅊ ㅠ',
		'ㅊ 딱히 이야기가 없다 보니, 재미를 느끼기도 좀 어렵고…….',
		{
			'Choice': {
				'1': {
					'Text': '나도 그래!',
					'Do': 'jump 3-4-1'
				},
				'2': {
					'Text': '하지만 정보를 담고 있는 책들도 재밌어.',
					'Do': 'jump 3-4-2'
				},
				'3': {
					'Text': '나한테는 둘 다 재미없던데.',
					'Do': 'jump 3-4-3'
				},
			}
		},
	],

	'3-4-1': [
		function() { monogatari.storage().문학 += 1 },
		'show character ㅊ ㅎ',
		'ㅊ ……! 그치?',
		'show character ㅊ ㅇ',
		'ㅊ 무언가를 공부하기 위한 책은 교과서랑 문제집만으로도 충분하다고 생각해….',
		'jump 3-5'
	],

	'3-4-2': [
		function() { monogatari.storage().문학 -= 1 },
		'show character ㅊ ㅠ',
		'ㅊ ……           그래……?',
		'show character ㅊ ㅇ',
		'ㅊ 그래……. 역시 책을 읽는 데에 있어서도, 편식은 좋지 않겠지….',
		'ㅊ ……',
		'jump 3-5'
	],

	'3-4-3': [
		function() { monogatari.storage().독서재미 -= 1 },
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅇ',
		'ㅊ 음…… 그럴 수 있지.',
		'jump 3-5',
	],

	'3-5': [
		'show character ㅊ ㅇ',
		'ㅊ …          …            !           점심 시간이네….',
		'ㅊ 음, 그러니까…….',
		'show character ㅊ ㅡ',
		'ㅊ ……',
		'show character ㅊ ㅎ',
		'ㅊ 저…… 점심 맛있게 먹어, {{이름}}{{아}}.',
		'hide character ㅊ with fadeOut',
		function() { monogatari.storage().ㅋ3 = false },
		'jump 1복도2'
	],

	'1복도2': [
		'show scene 복도2 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				'm복도1': {
					'Text': '',
					'Do': 'jump 4-1',
					'Class': 'm복도1',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ2',
					'Class': 'ㅊ2',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ3',
					'Class': 'ㅊ3',
				}
			}
		}
	],

	'4-1': [
		'show scene 도서관앞 with fadeIn',
		'show character ㅂ ㅡ with fadeIn',
		'ㅂ ……!',
		'show character ㅂ ㅋ',
		'ㅂ {{이름}}{{아}}, 왔구나! 기다리고 있었어.',
		'show character ㅂ ㅂ',
		'ㅂ 으으, 긴장돼…….',
		{
			'Choice': {
				'1': {
					'Text': '긴장 풀어. 내가 같이 있잖아',
					'Do': 'jump 4-1-1'
				},
				'2': {
					'Text': '고작 도서관 가는 걸로 무슨 긴장씩이나.',
					'Do': 'jump 4-1-2'
				},
				'3': {
					'Text': '나도 긴장돼!',
					'Do': 'next',
					'Condition': function() {
						return monogatari.storage('도서관안가');
					}
				},
			}
		},
		'show character ㅂ ㅋ',
		'ㅂ 아, 아냐 {{이름}}{{아}}! 우린 할 수 있어. 혼자가 아니라 둘이잖아!',
		'show character ㅂ ㅡ',
		'ㅂ ……',
		'show character ㅂ ㅋ',
		'ㅂ …그러니까 먼저 들어가 줄래? 난 네 뒤에 숨어서, 따라서 들어갈 테니까…….',
		{
			'Choice': {
				'1': {
					'Text': '도서관으로 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-1-1': [
		'show scene 도서관앞',
		function() { monogatari.storage().다정 += 1 },
		'show character ㅂ ㅎ',
		'ㅂ {{이름}}{{아}}…! 네가 없었다면 나는…….',
		'ㅂ 난 너만 믿을게!           ……           그러니까 앞장서 주라…!',
		{
			'Choice': {
				'1': {
					'Text': '도서관에 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-1-2': [
		'show scene 도서관앞',
		function() { monogatari.storage().다정 -= 1 },
		'show character ㅂ ㅠ',
		'ㅂ 그치만……           ……           .',
		'show character ㅂ ㅂ',
		'ㅂ …아니야, 난 할 수 있어!',
		'ㅂ {{이름}}{{아}}, 앞장서 줘! 난 네 뒤에 숨어서 몰래 따라 들어갈 테니까….',
		{
			'Choice': {
				'1': {
					'Text': '도서관에 들어간다.',
					'Do': 'jump 4-2'
				}
			}
		}
	],

	'4-2': [
		'show scene 서서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅇ',
		'ㅂ 오…….',
		'show scene #000000 with fadeIn',
		'wait 100',
		'show scene 도서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅎ',
		'ㅂ 무지 넓다!',
		'show scene #000000 with fadeIn',
		'wait 100',
		'show scene 동서관 with fadeIn',
		'wait 300',
		'show character ㅂ ㅎ',
		'ㅂ 조금 의외다…. 도서관은 책밖에 없을 줄 알았는데… 앉을 자리들만 보면 무슨 카페 같아!',
		'show character ㅂ ㅇ',
		'ㅂ 그리고…          내가 상상했던 것만큼 막 조용하지는 않네?           물론 점심시간 때의 우리 교실이나 복도보다는 조용하지만…….',
		'show character ㅂ ㅋ',
		'ㅂ …다행이다! 작은 목소리로라면 애들한테 말을 걸고 다녀도 괜찮을 것 같아.',
		'show character ㅂ ㅎ',
		'ㅂ 좋아! 온 김에 설문조사를 완전히 끝내 버리고 가야겠어. {{이름}}{{아}}, 우선 누구한테 말을 걸어 볼까?',
		'jump 1서서관1',
	],

	'1서서관1': [ //팁 뜨기 전의 도서관
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().도서관안내 == 0
				},
				'True': 'next',
				'False': 'jump 1서서관2'
			}
		},
		function() { monogatari.storage().도서관안내 += 1 },
		'show scene 서서관1 with fadeIn',
		'wait 500',
		'ㅂ 여긴 한눈에 볼 수 없을 만큼 넓네! 도서관의 오른쪽 편을 살펴보려면 화살표를 눌러줘.',
		'show scene 서서관1',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t13',
					'Class': 't13',
				},
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1서서관2': [ //진행도0
		{
			'Conditional': {
				'Condition': function() {
					if (monogatari.storage().도서관진행도 == 2) {
						return '2';
					} else if (monogatari.storage().도서관진행도 == 1) {
						return '1';
					} else {
						return '0';
					}
				},
				'0': 'next',
				'1': 'jump 1서서관3',
				'2': 'jump 1서서관4',
			}
		},
		'show scene 서서관1 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t13',
					'Class': 't13',
				},
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}

	],

	'1서서관3': [ //진행도 1 (펭귄만 있음)
		'show scene 서서관2 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1서서관4': [ //진행도 2 (최양 등장)
		'show scene 서서관3 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't2': {
					'Text': '',
					'Do': 'jump t14',
					'Class': 't14',
				},
				't3': {
					'Text': '',
					'Do': 'jump t15',
					'Class': 't15',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ4',
					'Class': 'ㅊ4',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ5',
					'Class': 'ㅊ5',
				},
				'ㅊ3': {
					'Text': '',
					'Do': 'jump ㅊ6',
					'Class': 'ㅊ6',
				},
				'm서서관1': {
					'Text': '',
					'Do': 'jump 1동서관1',
					'Class': 'm서서관1',
				}
			}
		}
	],

	'1동서관1': [ //고양원숭 등장 이전 동서관
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().도서관진행도 == 1
				},
				'True': 'jump 1동서관2',
				'False': 'next'
			}
		},
		'show scene 동서관1 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t16',
					'Class': 't16',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ7',
					'Class': 'ㅊ7',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ8',
					'Class': 'ㅊ8',
				},
				'm동서관1': {
					'Text': '',
					'Do': 'jump 1서서관2',
					'Class': 'm동서관1',
				}
			}
		}
	],

	'1동서관2': [ //고양원숭 등장 이후 동서관
		'show scene 동서관2 with fadeIn',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				't1': {
					'Text': '',
					'Do': 'jump t16',
					'Class': 't16',
				},
				't2': {
					'Text': '',
					'Do': 'jump t17',
					'Class': 't17',
				},
				'ㅊ1': {
					'Text': '',
					'Do': 'jump ㅊ7',
					'Class': 'ㅊ7',
				},
				'ㅊ2': {
					'Text': '',
					'Do': 'jump ㅊ8',
					'Class': 'ㅊ8',
				},
				'm동서관1': {
					'Text': '',
					'Do': 'jump 1서서관2',
					'Class': 'm동서관1',
				}
			}
		}











	],

	'ㅊ4': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ펭귄이날개로날수있다면.jpg',
		'centered ',
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅋ6 == 3) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'jump ㅊ4-1',
				'0': 'next'
		}},
		'show background ㅊ with fadeIn',
		'hide image ㅊ펭귄이날개로날수있다면.jpg',
		'wait 300',
		'책 <div style="font-size:0.8em; text-indent:0;"><p style="padding:0.3em!important;"><b>공부할 분야</b> - 4 <br>들어가며 <b>살아남기 위한 진화의 여정을 추적하다</b> - 6</p><hr><p style="padding:0.3em!important; font-size: 1.1em; font-weight:bold;">1장 날개는 어떻게 하늘을 가로지를까?</p><p style="padding:0.3em!important;"><b>비행기는 어떻게 하늘을 날까?</b> - 17 <br> 나아가는 힘인 추력과 저항하는 힘인 항력｜비행기를 들어 올리는 힘, 양력｜비행의 핵심, 받음각｜베르누이의 원리로 이해하는 양력｜열기구와 부력</p><p style="padding:0.3em!important;"><b>새들에게 배우는 비행의 핵심 기술</b> - 27<br>새의 뼈에는 구멍이 뚫려 있다고?｜힘찬 날갯짓의 원동력, 가슴근육｜날개 뼈는 어떻게 생겼을까?｜날개 모양의 작은 차이가 나는 방법을 결정짓는다｜날개 형태와 비행 능력의 차이｜새들이 비행하는 3가지 방식｜공중 정지와 후진｜이착륙의 요령｜기류를 타는 특별한 방법, 활공<b></p><p style="padding:0.3em!important;">곤충은 어떻게 하늘을 날까?</b> - 46<br> 곤충의 날갯짓｜공중 정지를 위한 날갯짓｜비행 효율을 높이는 날개 움직임｜미래의 비행술</p><hr><p style="padding:0.3em!important;"><span style="background-color:lightgrey; font-weight:bold;">진로 찾기</span> 항공우주공학자 - 57<br><span style="background-color:lightgrey; font-weight:bold;">진로 찾기</span> 자연사박물관 큐레이터 - 60</p></div>',
		'책 <div style="font-size:0.8em; text-indent:0;"><p style="padding:0.3em!important;font-size: 1.1em; font-weight:bold;">2장 인간이 꿈꿔 온 새의 날개</p><p style="padding:0.3em!important;"><b>더 쉽고 빠르게 날기 위한 전략</b> - 65 <br>바람을 이용하는 새들｜에베레스트산도 넘는 줄기러기의 날개｜기러기는 왜 무리지어 날아갈까? 철새가 이주하는 이유｜철새는 얼마나 높이 날 수 있을까?</p><p style="padding:0.3em!important;"><b>날지 못하는 새?</b> - 79 <br>도도새가 멸종한 이유｜날지 못하면 경쟁력이 없을까? 큰 몸집이 경쟁력인 새｜날기 위한 가슴과 뛰기 위한 골반</p><p style="padding:0.3em!important;"><b>생존을 위한 만능열쇠, 깃털</b> - 89<br>깃털의 각도에 따라 비행 방식도 달라진다｜깃털 색이 화려한 이유｜깃털에 들어있는 색소의 역할｜무지갯빛 깃털의 비밀은? 깃털을 젖지 않게 하는 미립자</p><p style="padding:0.3em!important;"><b>물속을 날아다니는 새, 펭귄</b> - 99<br>강한 근육과 넓은 어깨뼈가 있는 이유｜펭귄의 뼈는 왜 밀도가 높을까?｜펭귄과 앨버트로스가 친척이라고?｜펭귄의 깃털은 어떤 역할을 할까?｜펭귄의 깃털과 위장 능력｜펭귄은 물속에서 어떻게 숨을 쉴까?</p><hr><p style="padding:0.3em!important;"><span style="background-color:lightgrey; font-weight:bold;">진로 찾기</span> 고생물학자 - 118<br><span style="background-color:lightgrey; font-weight:bold;">진로 찾기</span> 질병관리본부 검역관 - 121</p></div>',
		function () {monogatari.storage ().ㅊ4 += 1 },
		'jump 1서서관1'
	],
	
	'ㅊ4-1':[
		'show background ㅊ with fadeIn',
		'hide image ㅊ펭귄이날개로날수있다면.jpg',
		'wait 300',
		'책 펭귄은 귀여운 외모로 많은 인기를 누리고 사랑을 받는 새다. 그런데 놀라운 능력 또한 아주 많다. 펭귄은 물속에 잠수해서 헤엄치고 사냥하기 위해 가슴근육이 아주 잘 발달해 있다. 두툼한 몸으로 추위를 이기고, 바다에서는 단단한 뼈로 수압을 견디며 깊이 잠수하며 도발적으로 헤엄친다.',
		'책 펭귄이란 이름은 원래 날지 못하는 새였던 큰바다오리에 붙였던 이름이다. 큰바다오리는 북반구에 살던 펭귄처럼 생긴 새였는데, 19세기에 선원들에게 쉽게 잡혀 식탁에 올랐고 과도하게 사냥되면서 멸종했다.',
		'책 펭귄은 날지는 못하지만 수중 생활에 아주 잘 적응해 남반구에 살고 있다. 날개는 지느러미발 구실을 하는데 날지 못한다는 이유로 얕보아서는 안 된다. 펭귄의 날개는 놀랄 정도로 민첩하고 효율적으로 움직인다. 펭귄 중에서도 가장 몸집이 큰 황제펭귄이 헤엄치는 속도는 보통 시속 6킬로미터에서 12킬로미터 정도고, 아주 빠르게 움직이는 경우는 시속 32킬로미터에 달하는 경우도 있다. 황제펭귄은 잠수 실력 실력도 출중하다. 수심 565미터 깊이까지 잠수한 기록이 있다.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 물속에서는 공기 중에서 날갯짓하는 것보다 훨씬 더 많은 힘이 든다. 그런 이유로 펭귄에게는 아주 강한 근육이 넓은 어깨뼈에 붙어 있다. 펭귄의 어깨뼈는 한쪽은 얇은 손잡이 같지만 나머지 부분은 크고 넓은 테니스 라켓처럼 생겼다. 날아다니는 새는 이에 비하면 어깨의 근육이 크지 않고 견갑골도 얇다. 초기 펭귄의 뼈는 그리 넓지 않았다. 그러다가 점차 위쪽으로 날개를 움직이는 힘을 기르며 오랜 세월에 걸쳐 어깨뼈가 넓어진 것으로 보인다.',
		'책 수천만 년 전 초기의 펭귄은 오늘날의 펭귄보다 해양 생활에 잘 적응하지 못했다. 나는 능력도 별로 시원찮아서 뚜렷한 개성을 드러내지 못했다. 짧은 날개를 갖고 잠수할 수는 있었지만 바닷속 깊이 들어갈 수는 없었다. 주로 발을 이용해서 물 표면에서 헤엄쳤다. 수천만 년 전의 초기 펭귄과 비교하면 현대 펭귄은 잠수하며 먹이를 잡는 능력이 놀랄 만큼 발달했다.',
		'책 펭귄은 날개를 접을 수 없다. 그러나 날개가 편평하고 아라비아 칼처럼 생겨 힘차게 노를 저어 물속을 빠르게 헤엄칠 수 있다. 펭귄은 다른 육상동물보다 뼈의 개수가 적은데, 유연성보다는 힘찬 날갯짓을 위해 뼈들이 융합되고 골화되었기 때문이다.<p style="font-size:0.8em; color:darkgrey; text-align: right;"> 최형선, 『펭귄이 날개로 날 수 있다면』, 다른, 2019, 99~104쪽. </p>',
		'jump 1서서관1'
	],

	'ㅊ5': [
		
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ나를찾는심리탐구서.jpg',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ나를찾는심리탐구서.jpg',
		'wait 300',
		'책 <p style="text-indent:0;"><b>모두의 친구가 되지 않아도 괜찮다</b></p>간혹 모든 사람들과 아주 좋은 관계를 유지하려고 노력하는 사람들이 있습니다. 물론 그렇게 될 수 있다면 좋겠지요. 문제는 사람을 사귀는 데에는 많은 시간과 노력이 든다는 것입니다. 우리에게 시간과 정신력이 무한하다면 모두에게 똑같은 열정을 쏟는 것이 가능합니다. 하지만 보통은 그렇지 않죠. 모두와 좋은 관계를 맺지 못하더라도 괜찮습니다. 대부분의 사람들이 그렇기도 하고요.',
		'책 또 모두와 좋은 친구가 되는 것이 당연한 것도 아닙니다. 사람들은 다 다르니까요. 사실 서로 다른 사람들이 마음을 열고 친해질 수 있다는 건 놀라운 일이죠. 마음이 맞지 않는 친구들을 만나면 그러려니 하고 마음이 맞는 친구들을 찾으면 됩니다. 마음이 잘 맞지 않는 친구들 때문에 실망하기보다 마음이 맞는 친구를 찾으면 그걸 기뻐하도록 합시다. 이렇게 넓고 넓은 우주의 그 많은 별들 중 이 지구에서, 서로 다른 수많은 사람들 가운데 나와 비슷하고 말이 통하는 사람을 만난다는 건 기적 같은 일이니까요.<p style="font-size:0.8em; color:darkgrey; text-align: right;"> 박진영, 『나를 찾는 심리 탐구서』, 위즈덤하우스, 2017, 113쪽.</p>',
		function () {monogatari.storage ().ㅊ5 += 1 },
		'jump 1서서관1',
	],
	'ㅊ6': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ나는도서관사서입니다.jpg',
		'centered ',
		'show background ㅊ with fadeIn',
		'hide image ㅊ나는도서관사서입니다.jpg',
		'wait 300',
		'책 <p><b>도서관과 친해질 수 있도록</b></p>여러분은 처음 도서관을 방문했던 때가 언제인지 기억이 나시나요? 도서관은 우리 가까이에 있으며 누구에게나 열려 있는 공간이지만, 한 번도 방문해보지 않은 사람들에게는 찾기 어색한 건물일 수도 있습니다. 그래서 아주 어릴 때부터 도서관을 찾고, 도서관에서 놀며 시간을 보내는 경험을 해보는 것이 중요합니다. 이런 경험들이 한 사람의 미래를 바꿀 수도 있거든요. 이렇게 어린이나 청소년들이 도서관을 친숙한 공간으로 느낄 수 있도록 안내하는 일도 사서의 업무 중 하나입니다.',
		'책 제가 근무하는 도서관에는 매주 수요일 오전에 근처 어린이집이나 유치원에서 단체로 어린이 친구들이 찾아옵니다. 선생님과 친구들의 손을 잡고 들어오며 도서관을 두리번거리는 어린이들의 모습은 정말 귀엽지요. 처음 도서관에 와본 친구들은 눈을 똥그랗게 뜨고 여기저기를 둘러보고, 부모님과 몇 번 도서관에 와본 어린이들은 자랑스럽게 자신의 경험을 친구들에게 얘기하기도 합니다.',
		'책 저는 도서관을 방문한 어린이들에게 도서관 곳곳을 소개합니다. 도서관에 오기 전 선생님께 미리 설명을 들은 덕분인지 아이들은 사서의 말에 귀를 기울이고 안내받은 대로 도서관 한쪽에 앉아 조용히 책을 꺼내 보기도 합니다. 이렇게 어린이들이 단체로 도서관에 오면 사서들은 함께 책을 읽고 각종 책놀이를 진행합니다. 모두 어린이들이 도서관에 친숙해질 수 있도록 도와주는 일들이지요.',
		'책 초·중·고등학교 학생들에게는 직접 사서체험을 하도록 돕습니다. 도서관이 어떤 곳인지, 사서가 어떤 직업인지 소개하고 간단한 업무를 실제로 할 수 있도록 가르칩니다. 학생들은 데스크에 앉아서 대출·반납을 직접 해보기도 하고, 책을 청구기호에 맞게 서가에 꽂아보기도 하고, 함께 도서관 프로그램을 기획하기도 합니다. 이 중에서 초·중·고등학생들이 제일 좋아하는 일은 데스크에서 대출·반납을 직접 해보는 일입니다. 데스크에 앉아 있는 것만으로도 사서가 된 기분을 느낄 수 있어서일까요? 도서관 소개 시간에는 무관심한 눈빛을 보이던 친구들도 데스크에 앉으면 잔뜩 설레는 표정을 짓곤 합니다. 이 중에는 마음속으로 사서의 꿈을 키우는 친구들도 있겠지요?',
		'책 2020년 코로나19 바이러스가 전 세계를 위협하기 전, 도서관은 매년 봄이나 가을에 축제를 열어 도서관 밖에서 다양한 이용자들을 만나고는 했습니다. 예를 들어 서울시 대표도서관인 서울도서관은 1년에 한 번 &apos;북 페스티벌&apos;을 열고요. 각 자치구 단위에서도 자체적으로 다양한 책 축제를 진행했습니다.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 축제는 도서관이 한꺼번에 많은 (예비)이용자들과 만날 기회의 장입니다. 도서관을 잘 알지 못했던 지역주민들에게 도서관을 홍보하고 이용 활성화를 도모하는 것이지요. 그뿐만 아니라 이용자들과 도서관이 평소에 할 수 없었던 새롭고 특별한 소통을 할 수 있는 시간이기도 합니다. 물론 그 새롭고 특별한 소통을 기획하고 준비해야 하는 사서들은 엄청난 창작의 고통(?)을 느끼기도 합니다.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 준비 과정을 포함해 새벽부터 이어지는 축제 행사가 끝나면 그야말로 사서들은 녹초가 됩니다. 이 하루를 위해 최소 6개월을 준비하고, 모든 것을 쏟아부었기 때문입니다. 몸은 힘들지만 이렇게 큰 소리로 웃으며 이용자들과 만나는 기회가 드물기에 사서들은 즐겁게 축제를 준비합니다. 이렇게 고생하고 나면 우리 도서관을 알고 찾아오는 이용자들도 꽤 많이 늘어납니다. 특히 축제 현장에서 재밌게 프로그램을 즐겼던 어린 이용자들이 그런 좋은 기억을 갖고 도서관을 찾아올 때만큼 보람찬 순간도 없습니다. <p style="font-size:0.8em; color:darkgrey; text-align: right;">홍은자, 『나는 도서관 사서입니다』, 푸른들녘, 2021, 128~132쪽. </p>',
		function () {monogatari.storage ().ㅊ6 += 1 },
		'jump 1서서관1',
	],
	'ㅊ7': [
		'show background ㅍㅈ with fadeIn',
		'show image ㅊ지금독립하는중입니다.jpg',
		'centered ',
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅊ7 > 0) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'jump ㅊ7-1',
				'0': 'next'
		}},
		'show character ㅂ ㅇ at left with fadeIn',
		'ㅂ 어라? 이 책 익숙한데….',
		{'Choice': {
				'1': {
					'Text': '그러게. 어디서 본 것 같은데….',
					'Do': 'ㅂ 아, 알겠다! 우리 반 학급 문고에 있었던 책이야!'
				},
				'2': {
					'Text': '우리 반 학급 문고에 있었던 책이잖아.',
					'Do': 'ㅂ 정말? 그랬던 것 같기도 하고….'
				},
		}},
		'ㅂ 조금이라도 읽어본 적 있어? 무슨 내용인지 알아?',
		{'Choice': {
				'1': {
					'Text': '기억이 잘….',
					'Do': 'ㅂ 그렇구나…….'
				},
				'2': {
					'Text': '미래의 키를 계산하는 방법이 나와 있었어.',
					'Do': 'ㅂ 키를 계산하는 방법이라…. 그럼 성장에 관련된 책이려나?'
				},
				'3': {
					'Text': '표지를 보니 정신건강과 관련된 책 아닐까?.',
					'Do': 'ㅂ 그럴지도 모르겠네! 정신과 의사가 쓴 책이라고 하니까….'
				},
		}},
		'ㅂ 앗, 읽어 보려고?',
		'hide character ㅂ with fadeOut',
		'jump ㅊ7-1',
	],
	
	'ㅊ7-1':[
		'show background ㅊ with fadeIn',
		'hide image ㅊ지금독립하는중입니다.jpg',
		'wait 300',
		'책 <p style="font-weight:bold;>자는 동안 뇌는 열심히 일한다</p><p>우리나라 중고등학생들의 수면 시간은 세계에서 꼴찌에 가깝다. 대부분의 학생들은 늦게까지 공부하느라 늘 잠이 부족하다고 여기면서 지낸다. 미국 국립수면재단은 청소년의 수면 시간으로 8.5~9.25 시간을 권하지만, 이 정도를 맘 편하게 자는 우리나라 학생이 몇 명이나 될까?</p>',
		'책 여러분 중에도 잠을 많이 자고 나면 죄책감을 느끼는 사람이 있을 것이다. 자는 시간은 인생을 낭비하는 시간일까? 결코 그렇지 않다. 휴대폰처럼 우리 뇌와 몸도 잘 자야 충전이 된다. 꼭 8시간 이상 자야 하는 것은 아니다. 5시간으로 충분한 사람도 있다. 적절한 수면 시간은 개인차가 크다. 그럼 내 적절한 수면 시간은 어느만큼일까? 자고 일어났을 때 피로가 풀린 것처럼 상쾌하고 평온한 기분이 들고, 자는 동안 있었던 일이 전혀 기억나지 않으면 충분히 잔 것이다.',
		'책 잠을 자는 동안 우리 뇌는 기억을 정돈하는 작업을 한다. 은행에 비유해 보면 쉽게 이해할 수 있다. 은행은 보통 4시에 문을 닫는데, 직원들이 일찍 퇴근하려고 그러는 걸까? 아니다. 그날 있었던 금전 거래를 맞춰 보고 정리할 시간이 필요하기 때문에 4시에 문을 닫는 것이다. 잠을 자는 동안 뇌가 하는 일도 그렇다.',
		'책 잠을 자면 외부 정보는 더 이상 들어오지 않는다. 이제 뇌는 깨어 있을 때 들어온 정보 중 쓸 만한 것들을 모아서 폴더별로 색인을 만들어 저장하고, 필요 없는 것은 과감히 지워 버리고, 서로 관계있는 것들은 잘 연결해 나중에 함께 꺼낼 수 있게 정리하는 작업을 한다. 그러니 잠을 잘 자야 장기 기억을 많이 만들 수 있다. 조금 더 전문적으로 설명하면 이렇다. 밤새 자는 동안 대뇌 피질에서는 초기 기억이 강화되어 저장된다. 또 수면 방추라는, 아주 짧은 순간에 방출되는 뇌파가 활동하면서 정보들이 서로 연결되고 강화되어 장기 기억이 되도록 한다.',
		'책 한편 기억 중추인 해마에서는 전날 들어온 것들을 잘 정리하고 분류해서 대뇌 피질로 전달하고 난 다음, 남아 있는 것들을 비운다. 그래야 다음 날 새로운 정보를 습득할 수 있는 여유가 생긴다. 이 역시 과학적인 실험으로 증명된 것이다. 2001년에 루이와 윌슨이라는 두 학자가 쥐에게 낮에 미로 찾기 훈련을 시키면서 뇌파를 찍어 보았다. 그런 뒤 쥐가 자는 동안에도 뇌파를 찍어 보았다. 그랬더니 자는 동안에도 미로를 찾을 때처럼 뇌파 패턴이 활성화되는 것이 발견되었다. 쥐는 자면서도 학습을 했던 것이다.',
		'책 비슷한 연구는 또 있다. 2000년에 데이브와 마골리아시라는 학자는 금화조라는 새를 연구해 보았다. 어린 수컷 금화조는 낮에 어른 금화조에게서 구애의 노래를 배웠다. 어른 금화조의 노래를 따라 부르며 연습을 했다. 그런데 어린 금화조가 밤에 잠을 잘 때 뇌파를 관찰해 보니 낮에 노래를 따라 부를 때와 똑같은 뇌파가 관찰되었다. 이 결과에 대해 학자들은 낮에 기본 패턴을 배워 두면, 자는 동안에는 뇌가 잡다한 곳에 에너지를 쓰지 않아도 되니 낮에 배운 것을 복습하면서 자기 것으로 만들어 내는 것이라고 해석했다.',
		'책 <p style="text-align:center; color:darkgray;"> (&hellip;&hellip;) </p> 이런 중요한 일을 자는 동안 우리 뇌가 한다. 한마디로 &apos;열일&apos;(열심히 일하다라는 뜻의 속어)하는 뇌다. 그러므로 잠자는 시간은 절대 낭비가 아니다. 성적을 올리려면 잠자는 시간을 꼭 확보해야 한다. 생리적으로는 밤 12시부터 7시 사이가 가장 좋은 수면 시간으로 권장된다.<p style="font-size:0.8em; color:darkgrey; text-align: right;"> 하지현, 『지금 독립하는 중입니다』, 창비, 2017, 91~93쪽 </p>',
		function () {monogatari.storage ().ㅊ7 += 1 },
		'jump 1동서관1',
	],
	'ㅊ8': [
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅋ9 == 1) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'next',
				'0': 'jump 1동서관1'
		}},
		'show background ㅊ with fadeIn',
		'wait 300',
		'show character ㅂ ㅇ at left',
		'ㅂ 일단…. 아무데나 펼쳐 볼까? 국어사전에서 단어는 가나다순으로 나와 있다고 했지?',
		'hide character ㅂ with fadeOut',
		'jump ㅊ8ㅇ',
	],
	'ㅊ8ㄱ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">국어사전</p><p><b>명사</b><br>1. 그 나라의 국민들이 쓰는 말을 모아 일정한 순서로 배열하고, 뜻풀이, 어원, 품사, 다른 말과의 관련 따위를 풀이한 사전.</p><p style="font-size:0.9em;">｜ 국어사전을 펼치다</p></div>',
		{'Choice': {
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅇ'
				},
		}},
	],	'ㅊ8ㄷ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">독서</p><p><b>명사</b><br>1. 책을 읽음.</p><p style="font-size:0.9em;">｜ 독서는 어떤 이들에게는 생활의 일부분이기 때문에 취미라고 말할 수 없다.</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㄱ'
				},
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅊ'
				},
		}},
	],	'ㅊ8ㅁ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">만족하다</p><p><b>자동사</b><br>1. (사람이 일이나 상태에) 모자람이 없이 마음에 들다.</p><p style="font-size:0.9em;">｜ 박 사장이 우리의 제의에 만족하는 눈치였다.</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㄱ'
				},
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅇ'
				},
		}},
	],	'ㅊ8ㅂ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">방화2</p><p><b>명사</b><br>1. 불에 미리 대비하거나 막음.</p><p style="font-size:0.9em;">｜ 이 건물의 방화 책임을 맡고 있는 나는 소화기의 위치와 비상 대피 시설 등을 항상 점검한다.</p><hr><p style="font-size:1.2em; font-weight:bold;">방화6</p><p><b>명사</b><br>1. 일부러 불을 지르거나 놓음.</p><p style="font-size:0.9em;">｜ 오늘 새벽, 상가 건물에 방화로 추정되는 불이 났다.</p></div>',
		'show character ㅂ ㅡ',
		'ㅂ ……',
		'ㅂ 엥?!',
		function () {monogatari.storage ().ㅊ8 += 1 },
		'jump 1동서관2',
	
	],	'ㅊ8ㅅ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">서정시</p><p><b>명사</b><br>1. (문학) 개인적인 감정과 정서를 주관적으로 표현한 시.</p><p style="font-size:0.9em;">｜ 한국 현대시의 대표적인 서정시로는 김소월의 <진달래꽃>과 김영랑의 <모란이 피기까지는>을 꼽을 수 있다.</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㅂ'
				},
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅌ'
				},
		}},
	],	'ㅊ8ㅇ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">암송하다</p><p><b>타동사</b><br>1. (사람이 글 따위를) 보지 않고 그대로 외워 말하다.</p><p style="font-size:0.9em;">｜ 내가 열 편의 시를 연달아 암송하니 모두들 놀랐다.</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㄷ'
				},
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅌ'
				},
		}},
	],	'ㅊ8ㅊ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">책</p><p><b>명사</b><br>1. 어떤 생각이나 사실을 글이나 그림 따위로 나타낸 종이를 겹쳐서 한데 꿰맨 물건. 세는 단위로는 권, 부, 집, 책, 편, 질이 있다.</p><p style="font-size:0.9em;">｜ 책을 읽다</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㅅ'
				},
				'우': {
					'Text': '뒷장으로',
					'Do': 'jump ㅊ8ㅌ'
				},
		}},
	],
	
	'ㅊ8ㅌ':[
		'책 <div style="text-indent:0;"><p style="font-size:1.2em; font-weight:bold;">탐독하다</p><p><b>타동사</b><br>1. (사람이 책을) 다른 일을 잊을 정도로 열중하여 읽다.</p><p style="font-size:0.9em;">｜ 그녀는 철학책을 탐독하느라 식사하는 것도 잊었다.</p><p><b>타동사</b><br>2. (사람이 어떤 글이나 책을) 특별히 즐겨 읽다.<p style="font-size:0.9em;">｜ 그녀는 김소월의 시를 탐독하여 그의 모든 시를 암송할 정도였다.</p></div>',
		{'Choice': {
				'좌': {
					'Text': '앞장으로',
					'Do': 'jump ㅊ8ㅇ'
				},
		}},
	],

	't13': [ //이호랑
		{
			'Conditional': {
				'Condition': function() {
					return monogatari.storage().ㅋ5 == 0
				},
				'True': 'next',
				'False': 'jump 5-2'
			}
		},
		'show scene 서서관 with fadeIn',
		'show character ㅂ ㅎ at left with fadeIn',
		'show character ㅇ ㅡ at right with fadeIn',
		'ㅂ 안녕, 호랑아! 다름이 아니라, 수행평가 때문에 설문조사를 하고 있는데….',
		'ㅂ 혹시 지금 뭐 읽고 있어?',
		'ㅇ ……',
		'show character ㅇ ㅇ at right',
		'ㅇ 문제집.',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅇ at left',
		'ㅂ ……            ……            엥?',
		{
			'Choice': {
				'1': {
					'Text': '문제집을 왜 도서관에서 풀고 있어?',
					'Do': 'next'
				},
			}
		},
		'show character ㅇ ㅋ at right',
		'ㅇ 교실보다 조용하니까.',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅎ at left',
		'ㅂ ……             그렇구나!',
		'show character ㅂ ㅇ  at left',
		'ㅂ ……            무, 문제집도 책인가? 문제집을 푸는 것도 독서를 하는 거라고 할 수 있나?',
		{
			'Choice': {
				'1': {
					'Text': '문제집 풀이도 독서 아닐까?',
					'Do': 'ㅂ …그런가? 하지만 조금 애매한 것 같은데…….'
				},
				'2': {
					'Text': '문제집 풀이가 독서는 아니지….',
					'Do': 'ㅂ …그런가? 잘 모르겠어…. 역시 설문에 넣기는 애매하겠지…?'
				}
			}
		},
		'ㅇ ……',
		'show character ㅇ ㅇ at right',
		'ㅇ 그래서 무슨 일이야?',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅠ at left',
		'ㅂ 앗, 그게… 그럼 혹시 문제집 말고 다른 책은 안 읽어? 우리 학교 친구들이 책을 읽는 이유를 조사하고 있는데…….',
		'show character ㅇ ㅇ at right',
		'ㅇ 안 읽어.',
		'show character ㅇ ㅡ at right',
		'ㅂ ……            아,          진짜로…?          전혀……?',
		'show character ㅇ ㅇ at right',
		'ㅇ 응.',
		'show character ㅇ ㅡ at right',
		'ㅂ 그, 그래도…….',
		{
			'Choice': {
				'1': {
					'Text': '그럼 대신에 안 읽는 이유를 물어보는 건 어때?',
					'Do': 'ㅂ 앗, 그럴까…? 네가 책을 안 읽는 이유는 뭐야?'
				},
				'2': {
					'Text': '왜 책을 안 읽는데?',
					'Do': 'next'
				},
			}
		},
		'show character ㅇ ㅇ at right',
		'ㅇ 시간이 없어서.          공부만 하기에도 시간이 부족한데, 성적이랑 관련 없는 거 읽을 시간이 어디 있어?',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅇ at left',
		'ㅂ 하지만, 지금은 시험 기간도 아닌데…?',
		'show character ㅇ ㅋ at right',
		'ㅇ 시험 기간이지. 기말고사까지 3주밖에 안 남았잖아.',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅠ at left',
		'ㅂ ……그러니까, 3주나 남았잖아…?',
		'ㅇ ……',
		'show character ㅇ ㅇ at right',
		'ㅇ 하여간, 난 요즘 잠까지 줄여가면서 공부하고 있어. 책 읽을 시간에 차라리 잠을 더 자고 말지.',
		{
			'Choice': {
				'1': {
					'Text': '하루에 몇 시간이나 자는데?',
					'Do': 'ㅇ 글쎄. 오늘은 네 시간쯤 잤나….'
				},
				'2': {
					'Text': '밤에 몇 시에 자는데?',
					'Do': 'ㅇ 글쎄. 어제는 새벽 세 시쯤 잤나….'
				}
			}
		},
		'show character ㅂ ㅇ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 정말로?! 안 졸려? 글자가 눈에 들어오긴 해…?',
		'show character ㅂ ㅡ at left',
		'show character ㅇ ㅇ at right',
		'ㅇ ……조금.           그래도 익숙해지면 할만 해.',
		{
			'Choice': {
				'1': {
					'Text': '정말 열심히 공부하는구나. 멋지다!',
					'Do': 'ㅇ ……그냥 할 수 있는 만큼 하는 것뿐이야.'
				},
				'2': {
					'Text': '그래도 잠을 지나치게 줄이는 건 건강에 안 좋을 텐데….',
					'Do': 'ㅇ ……어쩔 수 없지. 시험 기간 아닐 때에는 적당히 자고 있어.'
				},
			}
		},
		'ㅇ 좀 힘들긴 해도, 남들 자는 시간까지 끌어모아서 노력해야 그만큼 좋은 결과가 나올 테니까.',
		'show character ㅇ ㅋ at right',
		'ㅇ 이왕 노력하는 거 제대로 결과가 나와야 더 뿌듯하잖아.',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅠ at left',
		'ㅂ 그래도…….',
		'show character ㅇ ㅇ at right',
		'ㅇ ……                얘기 끝났으면 이만 가 줄래?',
		'show character ㅂ ㅇ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 아, 알겠어. 나중에 보자.',
		'hide character ㅇ with fadeOut',
		'ㅂ ……',
		'ㅂ 역시 좀 걱정되지 않아…?         하지만 공부를 위해서라는데, 뭐라 하기도 좀 그렇고…….',
		'ㅂ ……         일단 다른 친구들한테 설문을 계속 받아 볼까?',
		function() { monogatari.storage().ㅋ5 += 1 },
		'jump 1서서관2'
	],

	'5-2': [
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅊ7 > 0) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'jump 5-3',
				'0': 'next'
		}},
		'show scene 서서관 with fadeIn',
		'show character ㅇ ㅠ at right with fadeIn',
		'ㅇ 하암…….',
		'jump 1서서관2',
	],
	
	'5-3':[
		'show scene 서서관 with fadeIn',
		'show character ㅇ ㅠ at right with fadeIn',
		'show character ㅂ ㅡ at left with fadeIn',
		'ㅇ 하암…….',
		{'Choice': {
				'1': {
					'Text': '성적을 올리려면 꼭 잠자는 시간이 필요하대.',
					'Do': 'next'
				},
				'2': {
					'Text': '우리 뇌는 자는 동안에도 &apos;열일&apos;한대.',
					'Do': 'next'
				}
		}},
		'ㅇ ……        뭐?',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅇ at left',
		'ㅂ 방금 {{이름}}{{이}}랑 읽은 책에 나온 얘기인데, 우리 뇌는 잠을 자는 동안 기억을 정리한대.',
		{'Choice': {
				'1': {
					'Text': '(그 책을 가져와서 호랑이에게 보여준다)',
					'Do': 'next'
				},
				'2': {
					'Text': '(그 책의 내용을 설명한다)',
					'Do': 'next'
				},
		}},
		'show character ㅂ ㅡ at left',
		'ㅇ ……',
		'show character ㅇ ㅋ at right',
		'ㅇ 그렇군…. 이해했어.',
		'show character ㅇ ㅇ at right',
		'ㅇ 그런데, 그런 걸 굳이 나한테 알려주러 온 이유가 뭐야?',
		{'Choice': {
				'1': {
					'Text': '네가 걱정돼서….',
					'Do': 'jump 5-4-1'
				},
				'2': {
					'Text': '그냥 새로 알게 된 정보를 나누려고….',
					'Do': 'jump 5-4-2'
				},
				'3': {
					'Text': '비효율적인 공부 방법을 고집하고 있었던 너를 비웃어 주려고….',
					'Do': 'jump 5-4-3'
				},
		}}
	],
	
	'5-4-1':[
		'ㅇ ……?',
		'show character ㅂ ㅇ at left',
		'ㅂ 왜? 우, 우리가 너무 오지랖이었니…?',
		'ㅇ …아니. 너희가 굳이 날 걱정해줄 줄은 몰라서….',
		'ㅇ ……            우리 별로 친한 것도 아니잖아.',
		'show character ㅂ ㅋ at left',
		'ㅂ 아하하…….',
		'ㅇ …….',
		'show character ㅂ ㅎ',
		'show character ㅂ ㅇ at left',
		'show character ㅇ ㅠ at right',
		'ㅇ ……       그래도 일단은……            고마워.            생각해줘서.',
		'show character ㅇ ㅡ at right',
		'show character ㅂ ㅋ at left',
		'ㅂ 별 말씀을!',
		'jump 5-5'
	],
	
	'5-4-2':[
		'ㅇ ……?',
		'show character ㅂ ㅇ at left',
		'ㅂ 왜? 너, 너무 TMI였니…?',
		'ㅇ …아니. 분명 나한테 도움이 될 만한 정보긴 했으니까….',
		'show character ㅂ ㅋ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 그치? {{이름}}{{이}}는 저 내용을 읽자마자 너한테 달려온 거야!',
		{'Choice': {
				'1': {
					'Text': '맞아.',
					'Do': 'next'
				},
				'2': {
					'Text': '아니야!',
					'Do': 'next'
				},
		}},
		'ㅇ ……',
		'show character ㅇ ㅇ at right',
		'show character ㅂ ㅎ at left',
		'ㅇ 너희 좀 오지랖이 넓구나.',
		'show character ㅂ ㅋ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 아하하, 그런가…',
		'show character ㅇ ㅇ at right',
		'ㅇ ……           그래도….',
		'show character ㅇ ㅠ at right',
		'show character ㅂ ㅇ at left',
		'ㅇ 일단은…         고마워.             생각해줘서.',
		'show character ㅂ ㅋ at left',
		'ㅂ 별 말씀을!',
		'jump 5-5'

	],
	
	'5-4-3':[
		'show character ㅂ ㅡ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ ……',
		'ㅇ ……',
		'show character ㅂ ㅎ at left',
		'ㅂ 노, 농담이지? {{이름}}{{이}} 얘가 원래 좀 이래! 장난이 많아!',
		'ㅂ 분명 네가 잠을 잘 못 잔다니까 걱정이 돼서 말해준 걸 거야.',
		'show character ㅂ ㅋ at left',
		'show character ㅇ ㅇ at right',
		'ㅇ 그래…?',
		'show character ㅇ ㅡ at right',
		'ㅇ ……',
		'show character ㅇ ㅠ at right',
		'show character ㅂ ㅎ at left',
		'ㅇ 그래…. 일단은 고마워.',
		'jump 5-5'
	],

	'5-5':[
		'show character ㅇ ㅇ at right',
		'show character ㅂ ㅋ at left',
		'ㅇ 수면 시간을 조금 더 확보해 보긴 해야겠네….',
		'show character ㅇ ㅡ at right',
		'ㅇ ……',
		'show character ㅇ ㅇ at right',
		'ㅇ {{이름}}{{이}}랑… 토끼라고 했지? 그 설문조사 아직도 하고 있어?',
		'show character ㅂ ㅇ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 응?          응!',
		'show character ㅇ ㅇ at right',
		'ㅇ 나도…          자주는 아니지만, 시험기간이 아니라서 여유가 있을 때에는… 교과서 내용 중에 궁금했던 부분에 대해서 책을 찾아보기도 해.',
		'show character ㅇ ㅠ at right',
		'ㅇ 딱히 열심히 보는 건 아니고… 선생님께서 수업시간에 소개해주셨던 책들을 도서관에서 한번씩 훑어보는 정도지만…….',
		'show character ㅂ ㅎ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 정말? 잠깐, 바로 적어 놓을게! "궁금한 점을 찾아보기 위해서"라는 거지?',
		'show character ㅇ ㅇ at right',
		'ㅇ ……              응.            "선생님의 책 추천을 받아서"라고 해도 될 것 같은데…. 스스로는 별로 책을 안 찾아봐서.',
		'show character ㅂ ㅋ at left',
		'show character ㅇ ㅡ at right',
		'ㅂ 좋아, 다 적었어! 고마워. 많은 도움이 됐어!',
		'ㅇ ……',
		'show character ㅇ ㅋ at right',
		'ㅇ 도움이 됐다니 다행이야.',
		'show character ㅇ ㅇ at right',
		'ㅇ 도서관이 슬슬 좀 소란스러워지네…. 난 교실로 가는 게 낫겠어.',
		'show character ㅂ ㅎ at left',
		'ㅇ 아까보다 조금 사람이 많아졌으니까… 설문조사 금방 할 수 있겠네. 열심히 해 봐.',
		'show character ㅇ ㅡ at right',
		'ㅇ ……',
		'show character ㅇ ㅋ at right',
		'show character ㅂ ㅋ at left',
		'ㅇ ……            화이팅.',
		function () {monogatari.storage ().ㅋ5 += 1 },
		function () {monogatari.storage ().도서관진행도 = 1 },
		'jump 1서서관2',
	],

	't14': [ //류펭귄
		{'Conditional': {
				'Condition': function() {
					if (monogatari.storage().ㅋ6 == 3) {
						return '2';
					} else if (monogatari.storage().ㅋ6 > 0) {
						return '1';
					} else {
						return '0';
					}
				},
				'0': 'next',
				'1': 'jump 6-1',
				'2': 'jump t14-1'
		}},
		'show scene 서서관 with fadeIn',
		'show character ㄹ ㅇ at right with fadeIn',
		'show character ㅂ ㅎ at left with fadeIn',
		'ㄹ 토끼 안녕! 도서관에서는 처음 보는 것 같네.',
		'ㅂ 당연하지. 그야 난 오늘 처음 온 거거든!',
		'show character ㄹ ㅎ at right',
		'ㄹ 정말? 도서관 입성을 환영해! 음… 그런데, 거기 있는 친구는?',
		'show character ㅂ ㅋ at left',
		'show character ㄹ ㅇ at right',
		'ㅂ 이 친구는 {{이름}}{{이}}라고 해! 내 사회 수행평가를 도와주고 있어. <br> {{이름}}{{아}}, 여긴 내 친구 펭귄이야.',
		'show character ㄹ ㅎ at right',
		'ㄹ {{이름}}{{이}}구나. 만나서 반가워! <br> 사회 수행평가라면… 독서 동기를 조사하고 있구나?',
		'show character ㅂ ㅇ at left',
		'ㄹ 재미있는 주제같아 보여서 나도 하고 싶었는데. 나 책 무―지 좋아하거든!',
		{
			'Choice': {
				'1': {
					'Text': '나도 그래!',
					'Do': 'ㄹ 정말? 요즘 세상에 보기 힘든 친구네!'
				},
				'2': {
					'Text': '어떻게 그럴 수가 있어…?',
					'Do': 'ㄹ 하하하하! 안 그래도 그런 얘기 많이 들어!'
				}
			}
		},
		'ㅂ 우와……. 왜 책을 좋아해?',
		'show character ㅂ ㅡ at left',
		'show character ㄹ ㅇ at right',
		'ㄹ 책을 읽으면 내가 잘 몰랐던 내용에 대해 자세히 알 수 있게 되잖아. 내가 놓치고 살아갈 뻔했던 재미있는 얘기를 잔뜩 알 수 있는 거지!',
		'show character ㄹ ㅎ at right',
		'ㄹ 잘 몰랐던 친구랑 이야기를 나눠 보면 즐겁잖아? 책을 읽는 것도 비슷하다고 생각해.',
		'show character ㅂ ㅠ at left',
		'show character ㄹ ㅇ at right',
		'ㅂ …… 미안…. 나 I라서 친구 사귀는 즐거움에 비유해 주면 오히려 잘 모르겠어…….',
		'show character ㄹ ㅎ at right',
		'show character ㅂ ㅡ at left',
		'ㄹ 아하하하, 그럴 수 있지!',
		'show character ㅂ ㅇ at left',
		'ㅂ 넌 도서관에 자주 와?',
		'ㄹ 응! 난 책을 읽는 것뿐만 아니라 책을 뒤적거리는 것도 좋아하거든. <br> …내가 도서부라서, 일하러 와야 하기도 하고!',
		{'Choice': {
				'1': {
					'Text': '책을 뒤적거린다니?',
					'Do': 'next'
				}
		}},
		'show character ㄹ ㅇ at right',
		'show character ㅂ ㅡ at left',
		'ㄹ 책은 말야, 표지만 보고는 안에 무슨 내용이 들었는지 다 알 수 없잖아. 도서부 일을 하면서 책을 정리하다 보면, 가끔 무슨 내용을 담고 있을까 궁금해지게 만드는 표지들이 있거든?',
		'show character ㄹ ㅎ at right',
		'ㄹ 그런 책들을 그런 책을 마구 펼쳐서 훑어보는 게 내 취미야. <br> 도서관에서는 몇 권을 펼쳐 봐도 공짜라서 좋단 말이지. <span style="font-size:0.8em !important;"> 그러면서 은근슬쩍 도서부 일 땡땡이칠 수도 있고…. </span>',
		{
			'Choice': {
				'1': {
					'Text': '재밌겠다!',
					'Do': 'ㄹ 그치, 그치! 음…           예를 들어….'
				},
				'2': {
					'Text': '잘 모르겠는데….',
					'Do': 'ㄹ 아하하, 그런가?           그럼,          어디보자….'
				},
			}
		},
		'show character ㄹ ㅇ at right',
		'ㄹ 『펭귄이 날개로 날 수 있다면』이라는 책 들어본 적 있어? 저기 도서관 벽에 걸려 있는 이번 주 추천 도서 중에 하나인데.',
		'show character ㅂ ㅇ at left',
		'ㅂ 처음 들어 보는데……. 뭐에 관한 책이야?',
		'show character ㄹ ㅎ at right',
		'ㄹ 글쎄…. 무슨 책일까?',
		'ㄹ {{이름}}{{이}} 네 생각엔, 『펭귄이 날개로 날 수 있다면』이 뭐에 관한 책일 것 같아?',
		{
			'Choice': {
				'1': {
					'Text': '날 수 있는 펭귄을 주인공으로 한 소설?',
					'Do': 'ㅂ 그럴싸한데! 재밌을 것도 같아….'
				},
				'2': {
					'Text': '동물의 진화와 퇴화를 설명하는 교양서?',
					'Do': 'ㅂ 조금 어려워 보이는데…….'
				},
				'3': {
					'Text': '가질 수 없는 것을 부러워하곤 하는 청소년들을 위한 자기계발서?',
					'Do': 'ㅂ 음…. 흥미로워 보이긴 하네.'
				}
			}
		},
		'show character ㄹ ㅇ at right',
		'ㅂ 그래서, 뭐에 관한 책이야?',
		'show character ㄹ ㅎ at right',
		'ㄹ 글쎄……. 네가 가서 한번 읽어 봐!',
		'show character ㅂ ㅠ at left',
		'ㅂ 엑…. 저 두꺼워 보이는 책을 전부 읽어 보라고?',
		'show character ㄹ ㅇ at right',
		'ㄹ 뭐? 아니야! 책의 뒤표지나 목차를 보는 것만으로도 무슨 내용인지 대략은 알 수 있거든.',
		'show character ㅂ ㅎ at left',
		'show character ㄹ ㅎ at right',
		'ㅂ 목차라……! {{이름}}{{아}}, 가 볼까?',
		function() { monogatari.storage().ㅋ6 += 1 },
		'jump 1서서관2'
	],
	
	'6-1':[
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅊ4 > 0) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'jump 6-2',
				'0': 'next'
		}},
		'show scene 서서관 with fadeIn',
		'show character ㄹ ㅇ at right with fadeIn',
		'show character ㅂ ㅇ at left with fadeIn',
		'ㄹ 저 뒷벽에 전시된 책들이 우리 도서관 추천 도서야. 『펭귄이 날개로 날 수 있다면』도 저기에 있지.',
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅋ6 == 1) {
						return '1';
				} else {
						return '2';
					}
				},
				'1': 'next',
				'2': 'jump 1서서관2'
		}},
		'show character ㄹ ㅎ at right',
		'show character ㅂ ㅎ at left',
		'ㄹ 사서쌤이 고른 책도 있고, 우리 도서부 애들이 고른 것도 있어. 멋지지? 다른 학생들한테 추천을 받은 것도 있고….',
		'ㅂ 우와, 정말? 나도 추천할 수 있어?',
		'ㄹ 물론이지! 하지만 마음에 드는 책을 다 추천도서로 올릴 수 있는 건 아니야. 어느 정도는 다른 친구들의 심사를 거쳐야 해.',
		'show character ㄹ ㅠ at right',
		'show character ㅂ ㅇ at left',
		'ㄹ 그런데 내가 고른 책은, 늘 다른 도서부 친구들한테 노잼 소리를 듣더라…. 왜일까?',
		'jump 1서서관2'
	],
	
	'6-2':[
		'show scene 서서관 with fadeIn',
		'show character ㄹ ㅎ at right with fadeIn',
		'show character ㅂ ㅡ at left with fadeIn',
		'ㄹ 읽어보고 왔어? 뭐에 관한 책인 것 같아?',
		{'Choice': {
				'1': {
					'Text': '날고 싶다는 꿈을 가진 펭귄의 이야기를 담은 책',
					'Do': 'jump 6-3-1'
				},
				'2': {
					'Text': '생물의 진화와 비행의 권리에 관한 책',
					'Do': 'jump 6-4'
				},
				'3': {
					'Text': '생물학과 관련된 다양한 직업을 소개시켜 주는 책',
					'Do': 'jump 6-3-3'
				},
		}},
	],
	
	'6-3-1':[
		'show character ㄹ ㅇ at right',
		'ㄹ ……       정말로?            다른 책이랑 착각한 거 아니야? 다시 생각해 봐.',
		function () {monogatari.storage ().ㅅ061 = false },
		'ㄹ 『펭귄이 날개로 날 수 있다면』은 무슨 책이었어?',
		{'Choice': {
			'1': {
				'Text': '날고 싶다는 꿈을 가진 펭귄의 이야기를 담은 책',
				'Do': 'jump 6-3-1',
				'Clickable': function() {
					return monogatari.storage().ㅅ061
				},
			},
			'2': {
				'Text': '생물의 진화와 비행의 권리에 관한 책',
				'Do': 'jump 6-4'
			},
			'3': {
				'Text': '생물학과 관련된 다양한 직업을 소개시켜 주는 책',
				'Do': 'jump 6-3-3',
				'Clickable': function() {
					return monogatari.storage().ㅅ063
				},
			},
	}}
	],

	'6-3-3':[
		'show character ㄹ ㅎ at right',
		'ㄹ ……         맞아! 분명 그런 내용도 있긴 했지. 짧은 시간 안에 목차를 정말 꼼꼼하게 봤구나?',
		function () {monogatari.storage ().ㅅ063 = false },
		'show character ㄹ ㅇ at right',
		'ㄹ 하지만 그게 주 내용은 아니었던 것 같은데…. 전체적으로는 뭐에 관한 책이었던 것 같아?',
		{'Choice': {
			'1': {
				'Text': '날고 싶다는 꿈을 가진 펭귄의 이야기를 담은 책',
				'Do': 'jump 6-3-1',
				'Clickable': function() {
					return monogatari.storage().ㅅ061
				},
			},
			'2': {
				'Text': '생물의 진화와 비행의 권리에 관한 책',
				'Do': 'jump 6-4'
			},
			'3': {
				'Text': '생물학과 관련된 다양한 직업을 소개시켜 주는 책',
				'Do': 'jump 6-3-3',
				'Clickable': function() {
					return monogatari.storage().ㅅ063
				},
			},
	}}
	],

	'6-4':[
		'show character ㄹ ㅎ at right',
		'show character ㅂ ㅎ at left',
		'ㄹ 맞아! 목차만 봐도 대략 어떤 내용인지 알 수 있었지? 내 입맛에 맞을 듯한 책인지, 아닌지도 말이야.',
		'ㄹ 그래서 이렇게 눈에 띄는 책들을 한 번씩 훑어보다 보면… 가끔씩 내가 관심 있었던 내용을 담고 있는, 운명의 책도 찾을 수 있다니까?',
		'show character ㅂ ㅇ at left',
		'ㄹ 그러니까 너희도 책을 보면 한 번씩은 뒤적거려 봐. 책 앞뒤 표지랑 목차를 펼쳐보는 데에는 얼마 걸리지도 않잖아?',
		'show character ㄹ ㅇ at right',
		'ㅂ &apos;운명의 책&apos;이라고…? 좀 상상이 안 가는데…….',
		'ㄹ 네가 관심 있는 분야는 뭐야?',
		'show character ㅂ ㅎ at left',
		'ㅂ 아이돌! 그리고 먹을 거. 요리를 좋아하는 건 아니지만….',
		'show character ㅂ ㅡ at left',
		'ㄹ 음식에 관해서는 요리 책이 가장 많긴 한데…. 아! 음식의 역사에 관한 책이라면 본 적 있어.',
		'ㅂ ……',
		'show character ㄹ ㅎ at right',
		'ㄹ ……           음식의 역사 쪽에는 관심이 없나 보구나? 음, 음…….',
		'show character ㄹ ㅇ at right',
		'ㄹ 꼭 네 최대 관심사에 완벽히 부합하는 책이 아니더라도, 적당히 흥미롭게 읽을 수 있을 만한 책도 많을 거야.',
		'show character ㅂ ㅎ at left',
		'ㄹ 요즘 여자애들은 화장에 관련된 책을 많이 빌려가던걸? 화장의 유해성에 대한 오해라거나 제품 선택 방법을 다루고 있는 책인데….',
		'ㅂ 우와, 그 책은 좀 재밌겠다.',
		'show character ㄹ ㅎ at right',
		'show character ㅂ ㅇ at left',
		'ㄹ …하지만 아쉽게도 그 책은 지금 전부 대출 중이야! 친구들이 반납해줄 때까지 조금만 기다려 줘….',
		'show character ㄹ ㅇ at right',
		'ㄹ ……        그거 말고도 &apos;적당히 흥미로운&apos; 소재의 책은 많을 거야. 설문조사 하면서 겸사겸사 책을 뒤적거려 봐! {{이름}}{{이}} 너도.',
		'ㅂ …… 맞다! 설문조사!',
		'show character ㅂ ㅎ at left',
		'ㅂ 지금껏 까맣게 잊고 있었네…. 그러니까 펭귄이 너는, 책을 읽으면 "재미있는 정보를 많이 알 수 있어서" 책을 읽는댔지?',
		'show character ㄹ ㅎ at right',
		'ㄹ 응! 매일매일 도서관에서 책을 읽어버릇하다 보니 책 읽는 게 습관이 된 것도 있고.',
		'show character ㅂ ㅋ at left',
		'ㅂ 그럼 그것도 적어 놓을게. 시간 내 줘서 고마워!',
		'ㄹ 에헴! 앞으로도 궁금한 게 있으면 뭐든지 물어봐.',
		function () {monogatari.storage ().ㅋ6 = 3 },
		'jump 1서서관2'
	],

	't14-1': [ //류펭귄 퀘완료후
		'show scene 서서관 with fadeIn',
		'show character ㄹ ㅎ with fadeIn',
		'ㄹ 그 펭귄 어쩌고 하는 책은 더 읽어 봤어? 흥미로운 내용이 많던데!',
		'jump 1서서관2',
	],

	't15': [ //최 양
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage (). ㅋ6 == 3) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'next',
				'0': 'jump t15-1'
		}},
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage (). ㅋ8 == 1 ) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'next',
				'0': 'jump t15-1'
		}},
		//엔딩
		'show scene #ffffff',
		'centered 예시작 분량은 여기까지입니다. 플레이해주셔서 감사합니다.',
	],

	't15-1': [ //최 양 분기전
		'show scene 서서관 with fadeIn',
		'show character ㅊ ㅡ with fadeIn',
		'ㅊ ……',
		'jump 1서서관4',
	],

	't16': [ //남 곰
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅋ8 == 0) {
						return '0';
				} else {
						return '1';
					}
				},
				'1': 'jump t16-1',
				'0': 'next'
		}},
		'show scene 동서관 with fadeIn',
		'show character ㄴ ㅡ at right with fadeIn',
		'ㄴ ……',
		'show character ㅂ ㅋ at left with fadeIn',
		'ㅂ 안녕! 지금 친구들이 책을 읽는 이유를 조사하고 있는데….',
		'show character ㄴ ㅇ at right',
		'show character ㅂ ㅇ at left',
		'ㄴ 잠깐만! 말 시키지 말아 봐.',
		'show character ㄴ ㅡ at right',
		'ㅂ 응……?',
		'ㄴ ……',
		'(찰칵!)',
		'show character ㄴ ㅇ at right',
		'ㄴ 됐다! 이대로 보정해서 올려야겠어.',
		'ㅂ …뭐를……?',
		'ㄴ 사진을. 요즘 북스타를 하고 있거든!',
		'ㅂ 북스타?',
		'ㄴ 북스타그램! 인스타에 내가 읽은 책을 기록하는 거야.',
		{'Choice': {
				'1': {
					'Text': '왜 그런 걸 해?',
					'Do': 'jump 8-1-1'
				},
				'2': {
					'Text': '감상문 같은 걸 올리는 거야?',
					'Do': 'jump 8-1-2'
				},
				'3': {
					'Text': '맞팔하자!',
					'Do': 'jump 8-1-3'
				}
		}}
	],
	
	'8-1-1':[
		'ㄴ ……? 딱히 이유는 없는데! 애들 보면, 먹는 것도 노는 것도 다 인스타에 올리잖아? 그런 거지!',
		'ㄴ 다른 사람들이 책 많이 읽는 거 보면 자극 되기도 하고, 나도 저 책 읽어봐야지 싶기도 하고…. 무엇보다 갓생 사는 기분이 들어서 좋아.',
		'show character ㅂ ㅎ at left',
		'show character ㄴ ㅡ at right',
		'ㅂ 그날그날 공부한 시간을 인스타에 올리는 친구들은 본 적 있어. 그거랑 비슷한 거구나?',
		'show character ㄴ ㅇ at right',
		'ㄴ 맞아! 무엇보다 책 사진이랑 좋은 문장들로 피드를 꽉꽉 채워 놓으면 무지 예쁘거든. 볼래?',
		'jump 8-2'
	],
	
	'8-1-2':[
		'ㄴ 감상문이라고 부르자니 좀 거창하게 느껴지네! 그냥 읽고 나서 든 생각 몇 줄 적는 정도야. 남들이 올린 리뷰도 읽고….',
		'ㄴ 무엇보다도 책 사진이랑 좋은 문장들로 피드를 꽉꽉 채워 놓으면 무지 예쁘거든!',
		'show character ㅂ ㅎ at left',
		'show character ㄴ ㅡ at right',
		'ㅂ 그날그날 공부한 내용이랑 시간을 인스타에 올리는 친구들은 본 적 있어. 그거랑 비슷한 거구나?',
		'show character ㄴ ㅇ at right',
		'ㄴ 맞아! 책 읽은 걸 기록해 놓는 것도 나름 갓생 사는 기분이 들어서 좋아. 볼래?',
		'jump 8-2'

	],
	
	'8-1-3':[
		'ㄴ 앗,       좋아! 내 북스타 전용 계정 알려줄게.',
		'show character ㄴ ㅡ at right',
		'ㅂ 계정도 따로 있어?',
		'show character ㄴ ㅇ at right',
		'ㄴ 응! 계정 분리해 놓으면 다른 북스타그래머들이랑 교류하기 좋으니까…….',
		'ㄴ 다른 사람들 감상 읽는 것도 재밌고…. 무엇보다도 남들이 책 많이 읽는 거 보면 자극이 되거든?. 갓생 사는 기분이 들어서 좋아!',
		'show character ㅂ ㅎ at left',
		'ㅂ 그날그날 공부한 내용이랑 시간을 인스타에 올리는 친구들은 본 적 있어. 그거랑 비슷한 거구나?',
		'ㄴ 맞아! 무엇보다 책 사진이랑 좋은 문장들로 피드를 꽉꽉 채워 놓으면 무지 예쁘거든. 볼래?',
		'jump 8-2'

	],
	
	'8-2':[
		'show scene 장면1 with fadeIn',
		'centered ',
		{'Choice': {
				'1': {
					'Text': '멋지다!',
					'Do': 'next'
				},
				'2': {
					'Text': '좋네!',
					'Do': 'next'
				},
		}},
		'show scene 동서관 with fadeIn',
		'show character ㄴ ㅇ at right with fadeIn',
		'show character ㅂ ㅎ at left with fadeIn',
		'ㄴ 고마워! 좀 부끄럽네….',
		'show character ㄴ ㅡ at right',
		'show character ㅂ ㅋ at left',
		'ㅂ 너 글씨 예쁘다! 포스트잇에는, 책에 있는 문장을 필사해 놓은 거지?',
		'show character ㄴ ㅇ at right',
		'show character ㅂ ㅇ at left',
		'ㄴ 응! 좋은 문단이 있으면 페이지째로 찍어서 같이 올리기도 해.',
		{'Choice': {
				'1': {
					'Text': '그렇게 올려도 돼?',
					'Do': 'ㅂ 그러게…! 인터넷에 책 내용을 찍거나 옮겨 적어서 올리면, 저작권법 같은 거에 걸리지 않아?'
				},
				'2': {
					'Text': '저작권법에 걸리지 않아?',
					'Do': 'ㅂ 앗, 그러게…! SNS에 그렇게 책 내용을 찍거나 옮겨 적어서 올려도 돼??'
				},
		}},
		'ㄴ 괜찮아! 나도 그게 궁금해서 전에 찾아봤었는데, 내 감상을 나누려는 목적에서라면 문제가 없대.',
		'ㄴ 물론 몇 페이지씩 찍어서 올리는 건 안 되고, 적당히!',
		'show character ㅂ ㅎ at left',
		'show character ㄴ ㅡ at right',
		'ㅂ 그렇구나…!',
		'show character ㄴ ㅇ at right',
		'ㄴ 대신 책 제목이랑 작가 이름도 꼭 적어 놔야 해. 그리고, 어디까지가 인용이고 어디까지가 내 감상인지도 분명히 해둬야 한다고 그랬어.',
		'show character ㄴ ㅡ at right',
		'ㅂ 지켜야 할 게 좀 있긴 하지만, 올려도 되는구나……. 하긴, 사람들이 그렇게 책을 올리면 책 홍보도 되겠다.',
		'show character ㅂ ㅇ at left',
		'show character ㄴ ㅇ at right',
		'ㄴ 그치? 출판사가 내 북스타에 좋아요를 찍고 간 적도 있어.',
		'show character ㅂ ㅎ at left',
		'ㅂ 정말? 신기하다…!',
		'show character ㄴ ㅡ at right',
		'show character ㅂ ㅇ at left',
		'ㅂ ……         참!       본 목적을 잊을 뻔했네…!',
		'show character ㅂ ㅎ at right',
		'ㅂ 곰이 너는 책을 읽는 이유가 뭐야?',
		'show character ㄴ ㅇ at right',
		'ㄴ 책을 읽는 이유? 음…….',
		'ㄴ 솔직히 요즘은 북스타를 올리려고 책을 읽는 것도 있는 것 같아. 일주일에 한 권도 안 올리면 좀 눈치 보인단 말이지!',
		'show character ㅂ ㅋ at left',
		'show character ㄴ ㅡ at right',
		'ㅂ 그건… 좋은 점같기도 하고, 나쁜 점같기도 하네….',
		'show character ㅂ ㅎ at left',
		'ㅂ "SNS로 감상을 나누기 위해서" 정도로 적어 놔도 될까?',
		'show character ㄴ ㅇ at right',
		'ㄴ 그래그래! 그게 다야?',
		'show character ㄴ ㅡ at right',
		'show character ㅂ ㅋ at left',
		'ㅂ 응! 시간 내 줘서 고마워.',
		function () {monogatari.storage ().ㅋ8 += 1 },
		'jump 1동서관1'
	],

	't16-1': [ //남 곰 퀘완료후
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().도서관진행도 == 0) {
						return '0';
				} else if (monogatari.storage ().도서관진행도 == 1) {
					return '1';
				} else {
					return '2';
					}
				},
				'2': 'jump 8-3-2',
				'1': 'jump 8-3-1',
				'0': 'next'
		}},
		'show scene 동서관 with fadeIn',
		'show character ㄴ ㅇ with fadeIn',
		'ㄴ 오늘은 도서관이 평소보다 조용해서 좋네!',
		'jump 1동서관1',
	],
	
	'8-3-1':[
		'show scene 동서관 with fadeIn',
		'show character ㄴ ㅇ with fadeIn',
		'ㄴ 애들이 밥 다 먹고 올 시간이 되니까 도서관이 좀 소란스러워진 것 같아. 뭐, 어쩔 수 없지!',
		'jump 1동서관1',
	],

	'8-3-2':[
		'show scene 동서관 with fadeIn',
		'show character ㄴ ㅇ with fadeIn',
		'ㄴ ……         점심시간이 조금밖에 안 남았잖아! 교실로 돌아가기 귀찮은데….',
		'jump 1동서관1',
	],

	't17': [ //김고양&정원숭
	{'Conditional': {
			'Condition': function() {
				if (monogatari.storage().ㅋ9 == 2) {
					return '2';
				} else if (monogatari.storage().ㅋ9 == 1) {
					return '1';
				} else {
					return '0';
				}
			},
			'0': 'next',
			'1': 'jump 9-1',
			'2': 'jump t17-1',
	}},
	'show scene 동서관 with fadeIn',
	'show character ㅈ ㅇ with fadeIn',
	'show character ㄱ ㅇ at left with fadeIn',
		'ㅈ …아니거든, 내 말이 맞거든!',
		'ㄱ ……          뭐래, 바보야! &apos;방화&apos; 정도의 간단한 단어도 모르니?',
		'show character ㄱ ㅎ at left',
		'ㄱ &apos;방화&apos;는 불을 막는다는 뜻이잖아! &apos;방화벽&apos;이라는 말 몰라?',
		'show character ㅈ ㅇ',
		'show character ㄱ ㅡ at left',
		'ㅈ 뭐래…. 방화는 불을 지르는 걸 말하는 거야. &apos;방화범&apos; 몰라? 불을 막은 사람을 범인이라고 부르겠냐?',
		'show character ㅂ ㅇ at right with fadeIn',
		'ㅂ ……',
		'ㅂ ……             얘들아, 너희는 어째 볼 때마다 티격태격하고 있는 것 같다?',
		'show character ㄱ ㅇ at left',
		'ㄱ {{이름}}{{아}}, 토끼야! 마침 잘 왔어. 글쎄 얘가, 자꾸 &apos;방화&apos;의 뜻을 반대로 설명하는 거 있지?',
		'show character ㅈ ㅂ',
		'show character ㅂ ㅡ at right',
		'ㅈ 뭐래? 네가 잘못 알고 있는 거거든! &apos;방화&apos;는 불을 지르는 걸 말하는 거야!',
		'ㄱ 막는 거라니까?',
		'show character ㅈ ㅇ',
		'show character ㄱ ㅡ at left',
		'ㄱ 야, 얘네한테 물어보자. 너희는 어떻게 생각해?',
		'show character ㅂ ㅇ at right',
		'ㅂ ……           음…….       어,          나?',
		'show character ㅂ ㅠ at right',
		'show character ㅈ ㅠ',
		'ㅂ 그, 그게….           그, 분명 아는 단어라고 생각했는데…….             너희가 그렇게 말하니까 조금 헷갈리기 시작했어……. 너희 둘이 하는 말이 다 그럴싸하게 들려서….',
		'show character ㄱ ㅂ at left',
		'ㅈ 휴……. {{이름}}{{이}} 너는 어떻게 생각해? &apos;방화&apos;는 무슨 의미일까?',
		{'Choice': {
				'1': {
					'Text': '불을 지르는 것',
					'Do': 'ㅈ 거봐! {{이름}}{{이}}도 이렇게 말하잖아!'
				},
				'2': {
					'Text': '불을 막는 것',
					'Do': 'ㅈ 봤지? {{이름}}{{이}}도 이렇게 말하잖아!'
				},
				'3': {
					'Text': '왜 선택지가 이것밖에 없어',
					'Do': 'ㄱ {{이름}}{{이}} 넌 그럼 우리 둘 말이 다 틀리기라도 했다는 거야?'
				},
		}},
		'show character ㅂ ㅂ at right',
		'ㅂ 두, 둘 다 좀 진정해 봐!',
		'show character ㅂ ㅠ at right',
		'ㅂ 그냥 국어사전을 찾아보면 될 일이잖아, 그치…?',
		'show character ㅂ ㅇ at right',
		'show character ㄱ ㅇ at left',
		'ㄱ 엥, 나 폰 두고 왔는데?',
		'show character ㅈ ㅇ',
		'ㅈ 난 이번 달 데이터를 이미 다 써서….',
		'show character ㅂ ㅠ at right',
		'show character ㅈ ㄴ',
		'show character ㄱ ㅡ at left',
		'ㅂ …… 왜 너희 둘 다 평소에는 폰이 있는 게 당연하다는 것처럼 말하는 거야…? 너희 핸드폰 안 내고 살아?',
		'show character ㅈ ㅎ',
		'show character ㅂ ㅡ at right',
		'ㅈ ……       큼,         큼!           그보다… 도서관이니까 아마 국어사전도 있지 않을까…?',
		'show character ㄱ ㅎ at left',
		'ㄱ 헐. 책으로 된 사전도 있어?',
		'show character ㅈ ㅠ',
		'ㅈ 사전은 원래 책이거든….',
		'show character ㅂ ㅠ at right',
		'show character ㅈ ㅡ',
		'ㅂ 종이 사전을 본 적은 있어도, 직접 써 본 적은 없는데….',
		'show character ㅂ ㅡ at right',
		'ㄱ 난 인터넷 사전도 안 써 봤어!',
		'show character ㅈ ㅠ',
		'ㅈ 자랑이다….',
		'show character ㄱ ㅇ at left',
		'show character ㅈ ㅡ',
		'show character ㅂ ㅎ at right',
		'ㅂ {{이름}}{{이}} 너는? 종이 사전 써 본 적 있어?',
		{'Choice': {
				'1': {
					'Text': '당연하지.',
					'Do': 'ㅂ 우와…!'
				},
				'2': {
					'Text': '아니….',
					'Do': 'ㄱ 봐, 우린 이상한 게 아니야. 그냥 이게 요즘 MZ 특인 거라고.'
				},
		}},
		'show character ㄱ ㅡ at left',
		'show character ㅂ ㅇ at right',
		'ㅂ 근데 종이 사전이면, 단어 검색은 어떻게 해?',
		'show character ㅈ ㅇ',
		'ㅈ 그냥 단어가 가나다순으로 배열돼 있는 거 아냐? 저쪽 책장에 사전 있던데.',
		'show character ㄱ ㅎ at left',
		'show character ㅂ ㅡ at right',
		'ㄱ 그렇대. {{이름}}{{아}}, 가져와 줄래?',
		function () {monogatari.storage ().ㅋ9 = 1 },
		'jump 1동서관2'
	],
	
	'9-1':[
		{'Conditional': {
				'Condition': function () {
					if (monogatari.storage ().ㅊ8 > 0) {
						return '1';
				} else {
						return '0';
					}
				},
				'1': 'jump 9-2',
				'0': 'next'
		}},
		'show scene 동서관 with fadeIn',
		'show character ㅈ ㅇ with fadeIn',
		'show character ㄱ ㅡ at left with fadeIn',
		'ㅈ 근데 너 왜 요즘 자꾸 {{이름}}{{이}}를 부려먹는 거야…?',
		'show character ㄱ ㅇ at left',
		'show character ㅈ ㅡ',
		'ㄱ 음, {{이름}}{{이}}가 그나마 책이랑 친한 것 같아서…?',
		'show character ㄱ ㅠ at left',
		'show character ㅈ ㅠ',
		'ㄱ 솔직히, 난 책이라면 다 똑같은 종이 뭉치로 보이거든.',
		'ㅈ 자랑이다….',
		'jump 1동서관2'
	],
	
	'9-2':[
		'show scene 동서관 with fadeIn',
		'show character ㄱ ㅇ at left with fadeIn',
		'show character ㅈ ㅡ fadeIn',
		'show character ㅂ ㅡ at right fadeIn',
		'ㄱ 찾았어? &apos;방화&apos;의 의미가 뭐래?',
		{'Choice': {
				'1': {
					'Text': '불을 지르는 것',
					'Do': function () {monogatari.storage ().ㅅ091 = false },
				},
				'2': {
					'Text': '불을 막는 것',
					'Do': function () {monogatari.storage ().ㅅ092 = false },
				},
				'3': {
					'Text': '둘 다!',
					'Do': 'jump 9-3'
				},
		}},
		'jump 9-2-1'
	],
	
	'9-2-1':[
		'show character ㅂ ㅇ at right',
		'ㅂ ……?',
		'ㅂ 아, 아냐! 그러니까…….',
		{'Choice': {
			'1': {
				'Text': '불을 지르는 것',
				'Do': function () {monogatari.storage ().ㅅ091 = false },
				'Clickable': function() {
					return monogatari.storage().ㅅ091
				},
			},
			'2': {
				'Text': '불을 막는 것',
				'Do': function () {monogatari.storage ().ㅅ092 = false },
				'Clickable': function() {
					return monogatari.storage().ㅅ091
				},
			},
			'3': {
				'Text': '둘 다!',
				'Do': 'jump 9-3'
			},
	}},
],

'9-3':[
	'show character ㅈ ㄴ',
	'ㅈ 둘 다…라고?',
	'show character ㅂ ㅎ at right',
	'ㅂ 응! 그러니까 &apos;방화&apos;라는 단어는, 소위 말하는……',
	'show character ㅂ ㅇ at right',
	'show character ㄱ ㅎ at left',
	'show character ㅈ ㅡ',
	'ㄱ <b>&apos;동의어&apos;</b>라는 거구나?',
	'show character ㅈ ㅇ',
	'ㅈ <b>&apos;다의어&apos;</b>겠지.',
	'show character ㅂ ㅠ at right',
	'show character ㅈ ㄴ',
	'show character ㄱ ㅠ at left',
	'ㅂ ……               음….          그보다는 <b>&apos;동음이의어&apos;</b>에 가까울 것 같아.',
	'show character ㄱ ㅎ at left',
	'ㄱ 참, 그랬지!',
	{'Choice': {
			'1': {
				'Text': '어쨌든 너희 둘 다 뜻을 잘못 알고 있었던 거네.',
				'Do': 'next'
			},
			'2': {
				'Text': '어쨌든 너희 둘 다 뜻을 맞게 알고 있긴 했었네.',
				'Do': 'jump 9-4'
			},
	}},
	'show character ㄱ ㅡ at left',
	'show character ㅈ ㅡ',
	'show character ㅂ ㅇ at right',
	'ㄱ ……',
	'ㅈ ……',
	'show character ㅂ ㅋ at right',
	'ㅂ 두, 둘 다 옳은 뜻을 알고 있었던 거라고도 할 수 있지!',
	'jump 9-4',
],

'9-4':[
	'show character ㄱ ㅎ at left',
	'show character ㅈ ㅎ',
	'ㄱ ……              그런 셈이네!',
	'show character ㅈ ㅋ',
	'ㅈ 그렇네…. 이게 집단지성이라는 거구나!',
	'show character ㅂ ㅇ at right',
	'ㅈ 우리 둘의 아이큐를 합치면 200 정도 될 테니까, 우리가 힘을 합치면 천재나 다름없어.',
	'show character ㅂ ㅠ at right',
	'show character ㅈ ㅎ',
	'ㅂ …얘들아, 너희 방금까지 서로 자기 말이 맞다고 싸우고 있었거든…?',
	'ㄱ 그런 건 사소한 문제야.',
	'show character ㄱ ㅇ at left',
	'show character ㅈ ㅡ',
	'show character ㅂ ㅇ at right',
	'ㄱ 그보다 토끼 네가 도서관엔 무슨 일이야? 점심시간엔 처음 보는데.',
	'show character ㅂ ㅎ at right',
	'ㅂ 친구들이 책을 읽는 이유에 대해 설문조사를 하고 있어. 너흰 도서관 자주 와?',
	'ㄱ 음…. 자주 와.',
	'show character ㅂ ㅇ at right',
	'ㅂ 의외다! 책을 자주 읽는 것 같진 않았는데….                    ……         앗! 그러니까 내 말은, 넌 운동 같은 걸 더 좋아하는 것처럼 보여서….',
	'show character ㄱ ㅎ at left',
	'ㄱ 무슨 말인지 알아! 난 실제로 도서관에 와도 책은 별로 안 읽거든.',
	'ㅂ ……?            근데 왜 도서관에 와?',
	'ㄱ 소파가 푹신해! 분위기도 편안하고.',
	{'Choice': {
			'1': {
				'Text': '동감!',
				'Do': 'ㄱ 그치?'
			},
			'2': {
				'Text': '엑….',
				'Do': 'next'
			},
	}},
	'show character ㅂ ㅠ at right',
	'ㅂ … 으음……. 책을 읽는 건 아니니까 설문을 받을 순 없겠네….',
	'show character ㄱ ㅠ at left',
	'ㄱ 그렇네. 미안! <br> 정원숭 얘는 책 가끔 읽던데.',
	'show character ㅂ ㅎ at right',
	'show character ㄱ ㅡ at left',
	'ㅂ 정말? 원숭이 너는 책을 읽는 이유가 뭐야?',
	'show character ㅈ ㅇ',
	'show character ㅂ ㅇ at right',
	'ㅈ 데이터 아끼려고.',
	'ㅂ ……              응?',
	'show character ㅈ ㅎ',
	'show character ㄱ ㅠ at left',
	'ㅈ 요즘 세상에 데이터 소모 없이 시간 때울 방법이 은근히 없단 말이지….',
	'ㅈ 그래서 난 매월 말마다 강제적으로 문학소년이 되고 있어.',
	{'Choice': {
			'1': {
				'Text': '꿀팁이다!',
				'Do': 'ㅈ 그치? 너도 월말 한정 지성인이 돼 봐.'
			},
			'2': {
				'Text': '독서 말고도 데이터 없이 할 게 많은데….',
				'Do': 'ㄱ 내 말이 그 말이야! 동영상 오프라인 저장 해와서 보면 될 텐데.'
			},
	}},
	'show character ㄱ ㅡ at left',
	'show character ㅂ ㅎ at right',
	'ㅂ ……         어쨌거나, 멋진 이유네….',
	'show character ㅂ ㅇ at right',
	'ㅂ "데이터를 아끼려고"라고 적어놔도 되는… 거겠지?<br>음……. 고마워, 얘들아.',
	'show character ㅂ ㅡ at right',
	'show character ㅈ ㅇ',
	'show character ㄱ ㅎ at left',
	'ㄱ 유어웰컴!',
	'show character ㅈ ㅠ',
	'ㅈ 고양이 넌 설문에 답해주지도 않았잖아….',
	'ㄱ 하지만 응원은 하고 있어. 힘내, 얘들아!<br> 그럼 우린 이만…….',
	function () {monogatari.storage ().ㅋ9 += 1 },
	function () {monogatari.storage ().도서관진행도 += 1 },
	'hide character ㅈ',
	'hide character ㄱ',
	'ㅂ ……',
	'show character ㅂ ㅇ at right',
	'ㅂ 도서관이라고 꼭 책 읽는 애들만 있는 건 아니구나….',
	'jump 1동서관1',
	],


	/* ================================
	각종 틀
	================================ */

	'조사맵 틀': [
		'show scene 맵이미지',
		{
			'Choice': {
				'Dialog': '맵',
				'Class': '맵',
				'01': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소1',
				},
				'02': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소2',
				},
				'03': {
					'Text': '',
					'Do': 'jump ',
					'Class': '요소3',
				},
			}
		}
	],


	//============================

});
