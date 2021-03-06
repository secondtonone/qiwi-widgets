import './css/styles.css';

import WidgetButton from '../../components/widget-button';

const middleWidget300x270 = new WidgetButton();

middleWidget300x270.init({
    button: {
        id: 'make-donation'
    },
    message: {
        id: 'error-message'
    },
    input: {
        id: 'donation-amount',
        errorState: 'widget__field--error',
        defaultValue: true
    },
    link: {
        id: 'partner-link'
    }
});
