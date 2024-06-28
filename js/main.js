'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

$_ready (() => {
	// 2. Inside the $_ready function:


	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

		// 퀵메뉴 '대사록'을 '대화록'으로 수정
		monogatari.translation ('한국어', {
			'Log': '대화록'
		});

		//일부 퀵메뉴 삭제
		monogatari.component ('quick-menu').removeButton ('Back');
		monogatari.component ('quick-menu').removeButton ('Quit');
		monogatari.component ('quick-menu').removeButton ('Hide');
		monogatari.unregisterListener ('back');
		monogatari.unregisterListener ('hide');
	});

	});