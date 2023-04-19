
import contentTypeBuilder from '../../../node_modules/@strapi/plugin-content-type-builder/strapi-admin.js';
import email from '../../../node_modules/@strapi/plugin-email/strapi-admin.js';
import upload from '../../../node_modules/@strapi/plugin-upload/strapi-admin.js';
import seo from '../../../node_modules/@strapi/plugin-seo/strapi-admin.js';
import i18N from '../../../node_modules/@strapi/plugin-i18n/strapi-admin.js';
import usersPermissions from '../../../node_modules/@strapi/plugin-users-permissions/strapi-admin.js';
import wysiwygReactMdEditor from '../../../node_modules/strapi-plugin-wysiwyg-react-md-editor/strapi-admin.js';


const plugins = {
  'content-type-builder': contentTypeBuilder,
  'email': email,
  'upload': upload,
  'seo': seo,
  'i18n': i18N,
  'users-permissions': usersPermissions,
  'wysiwyg-react-md-editor': wysiwygReactMdEditor,
};

export default plugins;
