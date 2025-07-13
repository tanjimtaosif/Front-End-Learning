import React from 'react';
import Modal from './Modal';

export default function ViewUserModal({ isOpen, onClose, user }) {
  if (!user) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="User Details">
      <div className="space-y-2">
        {Object.entries({
          Name: user.name,
          Email: user.email,
          Age: user.age,
          Nationality: user.nationality,
          Skills: user.skills.join(', '),
          NID: user.nid,
          Address: user.address,
          Phone: user.phone,
          Website: user.website,
          Gender: user.gender,
          Degree: user.educationalQualifications.degree,
          University: user.educationalQualifications.university,
          Session: user.educationalQualifications.session,
          CGPA: user.educationalQualifications.cgpa,
        }).map(([label, value]) => (
          <p key={label}>
            <span className="font-semibold">{label}:</span> {value}
          </p>
        ))}
      </div>
    </Modal>
  );
}
