import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  MRT_EditActionButtons,
  MRT_Row,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useMemo, useState } from "react";
import useDeleteUser from "../../../hooks/useDeleteUser";
import useGetUsers from "../../../hooks/useGetUsers";

type User = {
  id: number;
  name: string;
  userName: string;
  password: string;
  positionJob: string;
  location: string;
};

export const CreateUsers = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});

  const {
    loading: isLoadingUsers,
    error: isLoadingUsersError,
    data: fetchedUsers,
    refetch
  } = useGetUsers();

  const { deleteUser } = useDeleteUser();

  const openDeleteConfirmModal = async (row: MRT_Row<User>) => {
    if (window.confirm("Tem certeza de que deseja excluir este usuário?")) {
      const success = await deleteUser(row.original.id);
      if (success) {
        refetch();
        window.alert("Usuário excluído com sucesso!");
      } else {
        window.alert("Erro ao excluir usuário.");
      }
    }
  };

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Id",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "name",
        header: "Nome",
        size: 300,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.name,
          helperText: validationErrors?.name,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },
      {
        accessorKey: "userName",
        header: "Nome de Usuário",
        size: 300,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.userName,
          helperText: validationErrors?.userName,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },
      {
        accessorKey: "positionJob",
        header: "Função",
        size: 300,
        muiEditTextFieldProps: {
          required: true,
          error: !!validationErrors?.positionJob,
          helperText: validationErrors?.positionJob,
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              name: undefined,
            }),
        },
      },
    ],
    [validationErrors]
  );

  //call CREATE hook
  // const { createUser, loading, error, response } = useCreateUser();

  const table = useMaterialReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal",
    editDisplayMode: "modal",
    enableEditing: true,
    initialState: { density: "compact" },
    enableDensityToggle: false,
    enableHiding: false,
    enableFullScreenToggle: false,
    enableColumnFilters: false,
    getRowId: (row) => row.id.toString(),
    onCreatingRowCancel: () => setValidationErrors({}),
    onEditingRowCancel: () => setValidationErrors({}),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        variant="contained"
        onClick={() => {
          table.setCreatingRow(true);
        }}
      >
        Criar novo usuário
      </Button>
    ),
    // Aparentemente é aqui onde se define o que vai ser renderizado no modal de criação inclusive pesrsonalizações com os checkbox.
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h6">Editar usuário</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Criar Atendimento" />
          <FormControlLabel
            control={<Checkbox />}
            label="Pesquisar Atendimento"
          />
          <FormControlLabel control={<Checkbox />} label="Organizar Equipes" />
          <FormControlLabel control={<Checkbox />} label="Designar OS" />
          <FormControlLabel control={<Checkbox />} label="Ordem de Serviço" />
          <FormControlLabel
            control={<Checkbox />}
            label="Criação de Usuários"
          />
        </FormGroup>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    //Buscar entender como funciona o renderCreateRowDialogContent
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h6">Criar novo usuário</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          {internalEditComponents} {/* or render custom edit components here */}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    state: {
      // isLoading: isLoadingUsers,
      // isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      // showAlertBanner: isLoadingUsersError,
      // showProgressBars: isFetchingUsers,
    },
    
  });

  return <MaterialReactTable table={table} />;
};
