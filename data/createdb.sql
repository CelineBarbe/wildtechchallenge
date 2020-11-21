BEGIN;

DROP TABLE IF EXISTS "argonaute";

CREATE TABLE "argonaute" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

INSERT INTO "argonaute"("name") VALUES
('Eleftheria'),
('Gennadios'),
('Lysimachos');

COMMIT; 