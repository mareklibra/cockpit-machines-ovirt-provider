
// export const INSTALL_SCRIPT = '/usr/share/cockpit/machines/provider/install.sh'
export const INSTALL_SCRIPT = '/root/.local/share/cockpit/machines/provider/install.sh' // TODO: change it!

export const CONFIG_FILE_URL = 'provider/machines-ovirt.config'
export const CSS_FILE_URL = 'provider/machines-ovirt.css'

export const VDSM_CONF_FILE = '/etc/vdsm/vdsm.conf';

const CONFIG = { // will be dynamically replaced by content of CONFIG_FILE_URL within OVIRT_PROVIDER.init()
  /**
   * Set to false to turn off the debug logging
   * See install.sh for production default.
   */
  debug: true,

  /**
   * See install.sh
   */
  OVIRT_BASE_URL: 'https://engine.local/ovirt-engine',

  /**
   * oVirt polling is not called more then once per this time period.
   * Just single execution can be in progress at a time.
   * The delay window starts since previous polling processing is finished.
   * In ms.
   *
   * See install.sh for production default.
   */
  ovirt_polling_interval: 5000,

  cockpitPort: 9090,

  /**
   * oVirt SSO token, filled in login.js
   */
  token: null,
};

export default CONFIG
