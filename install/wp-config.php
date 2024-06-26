<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'newtestc_wordpressaca');

/** MySQL database username */
define('DB_USER', 'newtestc_wordaca');

/** MySQL database password */
define('DB_PASSWORD', 'sr564n8aDWYO');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'Z]Op(mp%rKxvpgzHfqCRBLhQD=it{jYdhy}xeS(q%^HHgH|EeVPt&cUk(PXA[JU+?bg<%Cn)@StIf$;ESGDBHu!Qbi>|$mADVtXf+p&){chYpjwjyGyGpUCBgd|NZG)u');
define('SECURE_AUTH_KEY', 'f]&wgxHMcipxAtRV]+a}_}apws{db{e)+XE(-}=RcR%D)QalTV_=*Y|kHfy^b{FCE}v(%|CX|*COkpj_ZMP?aWu&}LR$cUSCl|R>Iq)pP@<-+K(uav[[B)_eFg(P^;ey');
define('LOGGED_IN_KEY', 'mqO{BHz[{IPwqqn!S>tjwzxD[$cA_V]l?fwb=k(j$vwe?^[{<jL!%!/JrOCfQzqL<z[R{W!cV<JcN^WotCO_*][yPJR>u)r=_yrCAD[>USOe@HFrut^bkr+uq!gt%Pjp');
define('NONCE_KEY', 'g+Zz/h@;fULIv+IkM[CT+F$Ig/JcdZtqB=-Uc%M|nLJ?mqDncJ|nKsPfou*>MhcSyQe{zyHGzTcc{WEt^T_WOXJ;I)F=mfMP?XpyiFeM;TUN>?Rr*$C?dtlfJQx?LVF;');
define('AUTH_SALT', '/vwBHeM@HLdVpKF+|uwXp)@lcWK>@rVrE{}yMMaM&tUweiI}%kE$ICRJBPd?fxit>]g=C}kWmUS!BFupLi(EX<QHbOkAwsO%xJ@rQm[Dv+-SSx+[*H@JKD>OW+)b)Vpy');
define('SECURE_AUTH_SALT', 'aHy}sFLWVGYe{XuMAFGH$$Iu_Jhj(kgf*rZYwuRM&WN@U?o>P|cRTD-Ar!$R*[kgW@Vs/bZdoW{bP&aA_<y-fIniFe|N_CCNxJD*bDx*yzI-O*o<YRyHz&qr>Wtg+$[f');
define('LOGGED_IN_SALT', '^;n%EVcQ%M;;)$qAxqls&DdUkqphW@}x{CO($gRiV(<H!UoVAk[|C|lZMp@NMRwzTyPwNPIsKIwtWkoXM%yA}}T?UcWU/ApkAMUhzes-CRq[Ebvjy)c$E?_E?>Fn{SLU');
define('NONCE_SALT', 'Iqx(oNmi@ecvL?DwV^|*A@Z+zwn|]!;[vdx^fv!<U%I-kLK}%cf(!{UA+;&b}!t]+<afoNaOXRLSn%qpMItHMWliXD]+IqS$>JBnDhxYO|jJyUccZjZn_GHU}_v^xcJ*');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_mnoh_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

/**
 * Include tweaks requested by hosting providers.  You can safely
 * remove either the file or comment out the lines below to get
 * to a vanilla state.
 
if (file_exists(ABSPATH . 'hosting_provider_filters.php')) {
	include('hosting_provider_filters.php');
} */
