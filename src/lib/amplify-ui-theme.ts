import { Theme } from '@aws-amplify/ui-react';

export const amplifyTheme: Theme = {
  name: 'custom-theme',
  tokens: {
    components: {
      authenticator: {
        router: {
          boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '{colors.border.primary}',
        },
        form: {
          padding: '2rem',
        },
      },
      button: {
        primary: {
          backgroundColor: '{colors.blue.60}',
          _hover: {
            backgroundColor: '{colors.blue.80}',
          },
        },
      },
      fieldcontrol: {
        _focus: {
          borderColor: '{colors.blue.60}',
        },
      },
    },
  },
};
