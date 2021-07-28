import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdLocationOn } from 'react-icons/md';

import api from '../../services/api';
import { city, radius, years, price, options } from '../../utils/data';
import {
  Container,
  Tabs,
  Form,
  FormRow,
  FormCol,
  WrapCheckBox,
  CheckBox,
  GroupSelect,
  Select,
  LinkAdvancedSearch,
  ButtonClear,
  ButtonSeeOffers,
  FooterWrap,
  GroupButtons,
} from './styles';

function Home() {
  const [tabActive, setTabActive] = useState(1);
  const [make, setMake] = useState([]);
  const [model, setModel] = useState([]);
  const [version, setVersion] = useState([]);
  const [makeId, setMakeId] = useState(0);
  const [modelId, setModelId] = useState(0);
  const [versionId, setVersionId] = useState(0);
  const [newCheck, setNewCheck] = useState(false);
  const [usedCheck, setUsedCheck] = useState(false);

  useEffect(() => {
    if (make.length) return;

    async function getMake() {
      const response = await api.get('/Make');
      if (response.status === 200)
        return setMake([
          ...[
            {
              id: 0,
              label: 'Todas',
            },
          ],
          ...response.data.map(mk => ({
            id: mk.ID,
            label: mk.Name,
          })),
        ]);
    }
    getMake();
  }, [make]);

  const formRef = useRef(null);

  const handleChangeMake = useCallback(async ({ id, label }) => {
    setModel([]);
    setMakeId({ id, label });
    const response = await api.get(`/Model?MakeID=${id}`);
    if (response.status === 200)
      return setModel([
        ...[
          {
            id: 0,
            label: 'Todas',
          },
        ],
        ...response.data.map(md => ({
          id: md.ID,
          label: md.Name,
        })),
      ]);
  }, []);

  const handleChangeModel = useCallback(async ({ id, label }) => {
    setVersion([]);
    setModelId({ id, label });
    const response = await api.get(`/Version?ModelID=${id}`);
    if (response.status === 200)
      return setVersion([
        ...[
          {
            id: 0,
            label: 'Todas',
          },
        ],
        ...response.data.map(vr => ({
          id: vr.ID,
          label: vr.Name,
        })),
      ]);
  }, []);

  const handleClearFilter = useCallback(() => {
    setMakeId(0);
    setModel([]);
    setModelId(0);
    setVersion([]);
    setVersionId(0);
  }, []);

  return (
    <Container>
      <Tabs tabActive={tabActive} setTabActive={setTabActive} options={options}>
        {tabActive === 1 && (
          <Form ref={formRef}>
            <WrapCheckBox>
              <CheckBox
                id="new"
                name="new"
                checked={newCheck}
                onChange={() => {
                  setNewCheck(!newCheck);
                }}
                label="Novos"
              />
              <CheckBox
                id="used"
                name="used"
                checked={usedCheck}
                onChange={() => {
                  setUsedCheck(!usedCheck);
                }}
                label="Usados"
              />
            </WrapCheckBox>
            <FormRow>
              <FormCol>
                <GroupSelect>
                  <Select
                    col={250}
                    Icon={MdLocationOn}
                    label="Onde:"
                    options={city}
                    isClearable
                    right
                  />
                  <Select col={166} label="Raio:" options={radius} left />
                </GroupSelect>
              </FormCol>
              <FormCol>
                <FormCol>
                  <Select
                    onChange={handleChangeMake}
                    col={200}
                    label="Marca:"
                    options={make}
                    value={makeId}
                  />
                </FormCol>
                <Select
                  onChange={handleChangeModel}
                  col={184}
                  label="Modelo:"
                  options={model}
                  value={modelId}
                />
              </FormCol>
            </FormRow>
            <FormRow>
              <FormCol>
                <FormCol>
                  <Select
                    col={200}
                    placeholder="Ano Desejado"
                    options={years}
                  />
                </FormCol>
                <FormCol>
                  <Select
                    col={200}
                    placeholder="Faixa de Preço"
                    options={price}
                  />
                </FormCol>
              </FormCol>
              <FormCol>
                <Select
                  col={400}
                  label="Versão:"
                  value={versionId}
                  options={version}
                  onChange={({ id, label }) => setVersionId({ id, label })}
                />
              </FormCol>
            </FormRow>
            <FormRow>
              <FooterWrap>
                <LinkAdvancedSearch>{'> Busca Avançada'}</LinkAdvancedSearch>
                <GroupButtons>
                  <ButtonClear onClick={handleClearFilter}>
                    Limpar filtros
                  </ButtonClear>
                  <ButtonSeeOffers type="button">VER OFERTAS</ButtonSeeOffers>
                </GroupButtons>
              </FooterWrap>
            </FormRow>
          </Form>
        )}
        {tabActive === 2 && <p>Motos</p>}
      </Tabs>
    </Container>
  );
}

export default Home;
