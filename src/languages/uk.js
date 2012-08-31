/**
 * Ukrainian (Українська) language functions
 */

( function ( $ ) {
	"use strict";
	var uk = $.extend( {}, $.i18n.languages['default'], {
		convertGrammar: function ( word, form ) {
			switch (form) {
			case 'genitive': // родовий відмінок
				if ( ( word.substr( word.length - 4 ) === 'вікі' )
						|| ( word.substr( word.length - 4 ) === 'Вікі' ) ) {
				} else if ( word.substr( word.length - 1 ) === 'ь' ) {
					word = word.substr( 0, word.length - 1 ) + 'я';
				} else if ( word.substr( word.length - 2 ) === 'ія' ) {
					word = word.substr( 0, word.length - 2 ) + 'ії';
				} else if ( word.substr( word.length - 2 ) === 'ка' ) {
					word = word.substr( 0, word.length - 2 ) + 'ки';
				} else if ( word.substr( word.length - 2 ) === 'ти' ) {
					word = word.substr( 0, word.length - 2 ) + 'тей';
				} else if ( word.substr( word.length - 2 ) === 'ды' ) {
					word = word.substr( 0, word.length - 2 ) + 'дов';
				} else if ( word.substr( word.length - 3 ) === 'ник' ) {
					word = word.substr( 0, word.length - 3 ) + 'ника';
				}
				break;
			case 'accusative': // знахідний відмінок
				if ( ( word.substr( word.length - 4 ) === 'вікі' )
						|| ( word.substr( word.length - 4 ) === 'Вікі' ) ) {
				} else if ( word.substr( word.length - 2 ) === 'ія' ) {
					word = word.substr( 0, word.length - 2 ) + 'ію';
				}
				break;
			}
			return word;
		}
	} );
	$.extend( $.i18n.languages, {
		'uk': uk
	} );
}( jQuery ) );