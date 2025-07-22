import React from 'react';
import styles from '../../styles/branch.module.css';
import { useIntl } from "react-intl";

const BranchSelector = ({ onSelect }) => {
    const intl = useIntl();
    const t = (key) => intl.formatMessage({id: key});
    const selectBranch = (branch) => {
        localStorage.setItem('branch', branch);
        if (onSelect) {
            onSelect(branch);
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent} role="dialog" aria-modal="true" aria-labelledby="branch-modal-title">
                <h2 id="branch-modal-title" className={styles.modalTitle}>{t('select_branch')}</h2>
                <div className={styles.buttons}>
                    <button className={styles.branchButton + ' ' + styles.armenia} onClick={() => selectBranch('armenia')}>
                        {t('armenia')}
                    </button>
                    <button className={styles.branchButton + ' ' + styles.georgia} onClick={() => selectBranch('georgia')}>
                        {t('georgia')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BranchSelector; 