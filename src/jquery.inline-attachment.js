/*jslint newcap: true */
/*global inlineAttachment: false, jQuery: false */
/**
 * jQuery plugin for inline attach
 *
 * @param {document} document
 * @param {window} window
 * @param {jQuery} $
 */
(function(document, window, $) {
  'use strict';

  inlineAttachment.editors.jquery = {};

  /**
   * Creates a new editor using jQuery
   */
  var editor = function(instance) {

    var $this = $(instance);

    return {
      getValue: function() {
        return $this.val();
      },
      insertValue: function(val) {
        inlineAttachment.util.insertTextAtCursor($this[0], val);
      },
      setValue: function(val) {
        $this.val(val);
      }
    };
  };

  $.fn.inlineattachment = function(options) {

    var set = $(this);

    set.each(function() {

      var $this = $(this),
        ed = new editor($this),
        inlineattach = new inlineAttachment(options, ed);

      $this.bind({
        'paste': function(e) {
          inlineattach.onPaste(e.originalEvent);
        },
        'drop': function(e) {
          e.stopPropagation();
          e.preventDefault();
          inlineattach.onDrop(e.originalEvent);
        },
        'dragenter dragover': function(e) {
          e.stopPropagation();
          e.preventDefault();
        }
      });

      // Custom code added by AP to include file picker like GitHub
      var filePicker = $this.parent().find('.manual-file-chooser');

      if( filePicker.length > 0 ) {

        filePicker.html('Add images by dragging and dropping or ');

        jQuery('<a/>', {
            href: '#',
            class: 'manual-file-chooser-text',
            text: 'selecting them from your device',
        }).appendTo( filePicker );

        jQuery('<input/>', {
            class: 'manual-file-chooser',
            type: 'file',
            multiple: 'multiple',
        }).appendTo( filePicker );

        $this.parent().on('change', '.manual-file-chooser', function (e)
        {
            e.stopPropagation();
            e.preventDefault();
            inlineattach.onFileChooserChange(e);
        });
      }

    });

    $('.manual-file-chooser-text').on('click', function(e) {
      e.preventDefault();
      $(this).parent().find('.manual-file-chooser').trigger('click');
    });

    return this;
  };

  inlineAttachment.editors.jquery.Editor = editor;

})(document, window, jQuery);