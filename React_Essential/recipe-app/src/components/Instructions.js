import React from "react";

export default function Instrcutions ({ title, steps}) {
    return (
        <section className="instrctions">
            <h2>{title}</h2>
            {steps.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </section>
    );
}