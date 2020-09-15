console.log("front page event script loaded, painting events");
jQuery.each(document.getElementsByClassName("node--type-event"),function(elementIndex,eventElement) {
            var eventColourClass = 'r_events';
            var blockEventType = eventElement.getElementsByClassName('block-field-blocknodeeventfield-event-type')[0];
            var blockEventTitle = eventElement.getElementsByClassName('block-field-blocknodeeventtitle')[0];
            var linkElement = eventElement.getElementsByClassName('field--name-field-link-to-event-page')[0].getElementsByTagName('A')[0];
            var eventElementType = blockEventType.getElementsByClassName('field__item')[0].innerText
            switch (eventElementType.toLowerCase()) {
                case ('community'):
                    eventColourClass = 'r_community';
                    break;
                case ('live'):
                    eventColourClass = 'r_live';
                    break;
                case ('talks'):
                case ('talk'):
                    eventColourClass = 'r_talks';
                    break;
                case ('courses'):
                case ('course'):
                    eventColourClass = 'r_courses';
                    break;
                default:
                    break;
            }
            blockEventTitle.classList.add(eventColourClass);
            blockEventType.classList.add(eventColourClass);
            linkElement.classList.add(eventColourClass);
            linkElement.innerText = "Find out more...";
        });
        
