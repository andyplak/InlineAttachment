jQuery
======

Using Inline Attachment as a jQuery plugin

.. code-block:: html

    <!DOCTYPE html>
    <html>
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>jQuery InlineAttachment Demo</title>
        </head>
        <body>
            <div>
                <textarea rows="10" cols="50"></textarea>
            </div>
            <div>
                <textarea rows="10" cols="50"></textarea>
            </div>
            <div>
                <textarea rows="10" cols="50"></textarea>
                <span class="manual-file-chooser"></span>
            </div>
            <div>
                <textarea rows="10" cols="50"></textarea>
                <span class="manual-file-chooser"></span>
            </div>

            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
            <script src="../src/inline-attachment.js"></script>
            <script src="../src/jquery.inline-attachment.js"></script>
            <script type="text/javascript">
                $(function() {
                    $('textarea').inlineattachment({
                        uploadUrl: 'upload_attachment.php'
                    });
                });
            </script>
        </body>
    </html>
