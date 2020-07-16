/**
 * Erreur Division par zero
 * @class DividedByZeroError
 * @extends Error
 */
class DividedByZeroError extends Error {

    /**
     * Singleton
     * @returns {DividedByZeroError}
     */
    static singleton() {
        return new this;
    }

    /**
     * @constructor
     * @param params
     */
    constructor(...params) {
        super(...params);

        if(Error.captureStackTrace) {
            Error.captureStackTrace(this, DividedByZeroError);
        }
        /**
         * Nom de la classe
         * @type {string}
         */
        this.name = 'DividedByZeroError';

        /**
         * Message de l'erreur
         * @type {string}
         */
        this.message = 'Division par zéro rencontrée.';

        /**
         * Date où l'erreur a été encourue
         * @type {Date}
         */
        this.date = new Date();
    }
}
module.exports = DividedByZeroError;
