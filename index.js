"use strict";

const Showdown = require('showdown');
const highlight = require('showdown-highlight');
const math = require('showdown-formula');
const mermaid = require('showdown-mermaid');
const bilibili = require('showdown-bilibili');
const tasklist = require('showdown-tasklist');

const showdown = new Showdown.Converter(
    {
      simplifiedAutoLink: true,
      strikethrough: true,
      tables: true,
      ghMentions: true,
      emoji: true,
      metadata: true,
      tasklists: true,
      smoothLivePreview: true,
      extensions: [
        bilibili,
        mermaid,
        highlight,
        math,
        tasklist
      ]
    }
  );



module.exports = function makeHtml(md) {
	return showdown.makeHtml(md);
};