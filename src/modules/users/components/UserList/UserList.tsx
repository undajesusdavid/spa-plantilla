import { Table, Column } from "../../../../shared/ui/Table/Table";
import { useDeleteUser, useUsersList  } from "../../hooks/useUsers";
import { GetUserResponse } from "../../domain/schemas"; // Tu tipo de dominio
import { Loading } from "../../../../shared/ui/Loading";
import { ErrorDisplay } from "../../../../shared/ui/ErrorDisplay";
import styles from "./UserList.module.css";
import SmallButton from "../../../../shared/ui/SmallButton";
import { Button } from "../../../../shared/ui/Button";
import { TrashIcon, PencilIcon } from "../../../../shared/ui/Icons";
import { useModal } from "../../../../shared/context/ModalContext";
import { useToast } from "../../../../shared/context/ToastContext";
import { useQueryClient } from "@tanstack/react-query";


export function UserList() {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useUsersList();
  const {mutate: deleteUser} = useDeleteUser();
  

  const { openModal, closeModal } = useModal();
  const { addToast, config } = useToast();

  const handleDelete = (id: string) => {
    deleteUser(id, {
      onSuccess: () => {
       queryClient.invalidateQueries({ queryKey: ["users"] });
        config("top-center", "500px");
        addToast("success", "El usuario ha sido eliminado", "Proceso Finalizado");
        closeModal();
      },
      onError: () => {
        addToast("error", "No se pudo eliminar el usuario", "Error");
      }
    });
  
  }
  
  const confirmDelete = (user: {id : string , username: string}) => {
    openModal({
      title: "Confirmación",
      content: <p>¿Estás seguro de que quieres eliminar el usuario {user.username}</p>,
      footer: (
        <>
          <Button size="sm" variant="ghost" onClick={closeModal}>
            Cancelar
          </Button>
          <Button size="sm" variant="danger" onClick={() => handleDelete(user.id)}>
            Aceptar
          </Button>
        </>
      ),
    });
  };

  const columns: Column<GetUserResponse>[] = [
    {
      header: "Usuario",
      key: "username",
      render: (user) => (
        <span className={styles.username}>{user.username}</span>
      ),
    },
    {
      header: "Email",
      key: "email",
      render: (user) => <span className={styles.email}>{user.email}</span>,
    },
    {
      header: "Estado",
      key: "active",
      width: "100px",
      render: (user) => (
        <SmallButton variant={user.active ? "success" : "outline-danger"}>
          {user.active ? "Activo" : "Inactivo"}
        </SmallButton>
      ),
    },
    {
      header: "Acciones",
      key: "id",
      width: "300px",
      render: (user) => (
        <>
          <Button size="sm" variant="warning" onClick={() => null}>
            <PencilIcon />
          </Button>

          <Button size="sm" variant="danger" onClick={() => confirmDelete(user)}>
            <TrashIcon />
          </Button>
        </>
      ),
    },
  ];

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay />;

  return (
    <Table data={data ?? []} columns={columns} keyExtractor={(u) => u.id} />
  );
}
