-- Create Sovereign Tax Platform Schema
-- 
-- 1. New Tables
--   - tax_returns: Main table for tax return filings
--   - intake_sections: Sections of the intake questionnaire
--   - documents: Uploaded documents
--   - activities: Activity timeline
--   - efile_authorizations: E-file authorization records
-- 
-- 2. Security
--   - Enable RLS on all tables
--   - Add policies for authenticated users to access their own data

CREATE TABLE IF NOT EXISTS tax_returns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  entity_name text NOT NULL,
  tax_year integer NOT NULL,
  form_type text NOT NULL DEFAULT 'Form 1120',
  status text NOT NULL DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tax_returns ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own tax returns"
  ON tax_returns FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own tax returns"
  ON tax_returns FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own tax returns"
  ON tax_returns FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own tax returns"
  ON tax_returns FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS intake_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tax_return_id uuid REFERENCES tax_returns ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  description text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  questions_count integer DEFAULT 0,
  documents_count integer DEFAULT 0,
  "order" integer NOT NULL,
  required boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE intake_sections ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view intake sections for own returns"
  ON intake_sections FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = intake_sections.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert intake sections for own returns"
  ON intake_sections FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = intake_sections.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update intake sections for own returns"
  ON intake_sections FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = intake_sections.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = intake_sections.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete intake sections for own returns"
  ON intake_sections FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = intake_sections.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tax_return_id uuid REFERENCES tax_returns ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  file_path text NOT NULL,
  uploaded_by uuid REFERENCES auth.users NOT NULL,
  uploaded_at timestamptz DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view documents for own returns"
  ON documents FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = documents.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert documents for own returns"
  ON documents FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = documents.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete documents for own returns"
  ON documents FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = documents.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tax_return_id uuid REFERENCES tax_returns ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users,
  action text NOT NULL,
  details text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view activities for own returns"
  ON activities FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = activities.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert activities for own returns"
  ON activities FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = activities.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE TABLE IF NOT EXISTS efile_authorizations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tax_return_id uuid REFERENCES tax_returns ON DELETE CASCADE NOT NULL,
  jurisdiction text NOT NULL,
  full_name text,
  title text,
  date date,
  declaration1 boolean DEFAULT false,
  declaration2 boolean DEFAULT false,
  declaration3 boolean DEFAULT false,
  authorized boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE efile_authorizations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view efile authorizations for own returns"
  ON efile_authorizations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = efile_authorizations.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert efile authorizations for own returns"
  ON efile_authorizations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = efile_authorizations.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update efile authorizations for own returns"
  ON efile_authorizations FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = efile_authorizations.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM tax_returns
      WHERE tax_returns.id = efile_authorizations.tax_return_id
      AND tax_returns.user_id = auth.uid()
    )
  );